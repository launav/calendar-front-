import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModelOpen: false
    },
    reducers: {
        onOpenModal: (state) => {
            state.isModelOpen = true
        },
        onCloseModal: (state) => {
            state.isModelOpen = false
        }
    }
});

export const { onOpenModal, onCloseModal } = uiSlice.actions
