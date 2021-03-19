export const inputTex = texContent => (
    {
        type:'INPUT_TEX',
        payload : {
            texContent
        }
    }
)

export const setOpenForm = isOpenForm => (
    {
        type:'SET_OPEN_FORM',
        payload : {
            isOpenForm:isOpenForm
        }
    }
)