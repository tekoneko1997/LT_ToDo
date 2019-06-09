

export function closeDialog(){
    return {
        type: 'ClOSE_DIALOG',
        open: false
    }
}

export function openDialog(){
    return {
        type: 'OPEN_DIALOG',
        open: true
    }
}
