export const log = (log: any) => {
    const timestamp = new Date().toISOString();
    console.log("🔭", timestamp, log);
}

export const logError = (error: any) => {
    const timestamp = new Date().toISOString();
    console.log("🚨", timestamp, error);
}