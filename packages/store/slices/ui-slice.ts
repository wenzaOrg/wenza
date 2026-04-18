import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * UI Redux slice for global UI state.
 * Intentionally minimal for Phase 1.
 */
export interface UiState {
  sidebarCollapsed: boolean;
  activeModal: string | null;
}

const initialState: UiState = {
  sidebarCollapsed: false,
  activeModal: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
  },
});

export const { toggleSidebar, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
