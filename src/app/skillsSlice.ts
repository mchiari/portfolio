import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface skillsState {
    skills: string[]
}

const initialState: skillsState  = {
    skills: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Typescript",
        "React",
        "Redux",
        "Styled",
        "Figma",
        "Tailwind",
        "Chakra UI",
        "Azure",
        "Corel Draw",
    ]
}

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers:{
        changeOrder: (state, action: PayloadAction<string[]>) =>{
            state.skills = action.payload
        }
    }
})

export const { changeOrder } = skillsSlice.actions
export const selectSkills = (state: RootState) => state.skills

export default skillsSlice.reducer