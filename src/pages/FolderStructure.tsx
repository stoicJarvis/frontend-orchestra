"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, ChevronDown, Folder, File, Trash2, FolderPlus, FilePlus } from "lucide-react"

interface FileSystemItem {
    id: string
    name: string
    type: "folder" | "file"
    children?: FileSystemItem[]
}

interface TreeItemProps {
    item: FileSystemItem
    onDelete: (id: string) => void
    onAddFolder: (parentId: string) => void
    onAddFile: (parentId: string) => void
    level: number
}

const TreeItem: React.FC<TreeItemProps> = ({ item, onDelete, onAddFolder, onAddFile, level }) => {
    const [isExpanded, setIsExpanded] = useState(true)
    const [isHovered, setIsHovered] = useState(false)

    const handleToggle = () => {
        if (item.type === "folder") {
            setIsExpanded(!isExpanded)
        }
    }

    const paddingLeft = level * 20

    return (
        <div>
            <div
                className={`flex items-center py-1 px-2 hover:bg-gray-100 rounded cursor-pointer group transition-colors`}
                style={{ paddingLeft: `${paddingLeft}px` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex items-center flex-1" onClick={handleToggle}>
                    {item.type === "folder" && (
                        <div className="w-6 h-6 mr-1 flex items-center justify-center">
                            {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-black" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-black" />
                            )}
                        </div>
                    )}
                    {item.type === "file" && <div className="w-5 mr-1" />}

                    <div className="w-6 h-6 mr-2 flex items-center justify-center">
                        {item.type === "folder" ? (
                            <Folder className="w-6 h-6 text-black" />
                        ) : (
                            <File className="w-6 h-6 text-black" />
                        )}
                    </div>

                    <span className="text-m text-black select-none">{item.name}</span>
                </div>

                {isHovered && (
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.type === "folder" && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onAddFolder(item.id)
                                    }}
                                    className="p-1 hover:bg-gray-200 rounded"
                                    title="Add folder"
                                >
                                    <FolderPlus className="w-4 h-4 text-black" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onAddFile(item.id)
                                    }}
                                    className="p-1 hover:bg-gray-200 rounded"
                                    title="Add file"
                                >
                                    <FilePlus className="w-4 h-4 text-black" />
                                </button>
                            </>
                        )}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                onDelete(item.id)
                            }}
                            className="p-1 hover:bg-red-100 rounded"
                            title="Delete"
                        >
                            <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                    </div>
                )}
            </div>

            {item.type === "folder" && isExpanded && item.children && (
                <div>
                    {item.children.map((child) => (
                        <TreeItem
                            key={child.id}
                            item={child}
                            onDelete={onDelete}
                            onAddFolder={onAddFolder}
                            onAddFile={onAddFile}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default function FolderStructure() {
    const [fileSystem, setFileSystem] = useState<FileSystemItem[]>([]);

    const generateId = () => Date.now().toString()

    const removeItemById = (items: FileSystemItem[], id: string): FileSystemItem[] => {
        return items.filter((item) => {
            if (item.id === id) return false
            if (item.children) {
                item.children = removeItemById(item.children, id)
            }
            return true
        })
    }

    const addItemToParent = (items: FileSystemItem[], parentId: string, newItem: FileSystemItem): FileSystemItem[] => {
        return items.map((item) => {
            if (item.id === parentId && item.type === "folder") {
                return {
                    ...item,
                    children: [...(item.children || []), newItem],
                }
            }
            if (item.children) {
                return {
                    ...item,
                    children: addItemToParent(item.children, parentId, newItem),
                }
            }
            return item
        })
    }

    const handleDelete = (id: string) => {
        setFileSystem((prev) => removeItemById(prev, id))
    }

    const handleAddFolder = (parentId: string) => {
        const newFolder: FileSystemItem = {
            id: generateId(),
            name: "New Folder",
            type: "folder",
            children: [],
        }
        setFileSystem((prev) => addItemToParent(prev, parentId, newFolder))
    }

    const handleAddFile = (parentId: string) => {
        const newFile: FileSystemItem = {
            id: generateId(),
            name: "new-file.txt",
            type: "file",
        }
        setFileSystem((prev) => addItemToParent(prev, parentId, newFile))
    }

    const handleAddRootFolder = () => {
        const newFolder: FileSystemItem = {
            id: generateId(),
            name: "New Folder",
            type: "folder",
            children: [],
        }
        setFileSystem((prev) => [...prev, newFolder])
    }

    const handleAddRootFile = () => {
        const newFile: FileSystemItem = {
            id: generateId(),
            name: "new-file.txt",
            type: "file",
        }
        setFileSystem((prev) => [...prev, newFile])
    }

    return (
        <div className="w-full max-w-md mx-auto p-6">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-black">File Explorer</h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleAddRootFolder}
                            title="Add folder"
                        >
                            <FolderPlus className="w-6 h-6 text-black" />
                        </button>
                        <button
                            onClick={handleAddRootFile}
                            title="Add file"
                        >
                            <FilePlus className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-2 max-h-96 overflow-y-auto">
                {fileSystem.length === 0 ? (
                    <div className="text-center py-8 text-black">
                        <Folder className="w-8 h-8 mx-auto mb-2 text-black" />
                        <p className="text-m">No files or folders</p>
                    </div>
                ) : (
                    fileSystem.map((item) => (
                        <TreeItem
                            key={item.id}
                            item={item}
                            onDelete={handleDelete}
                            onAddFolder={handleAddFolder}
                            onAddFile={handleAddFile}
                            level={0}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
