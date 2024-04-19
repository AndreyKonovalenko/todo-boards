export function getErrorMessage(error: unknown) {
    if(error instanceof Error) return error.message;
    return String(error)
}

export const  DATABASE_ERROR_REASONPHRASE= "Database error"