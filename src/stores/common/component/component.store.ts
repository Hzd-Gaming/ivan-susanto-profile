import { create } from 'zustand';

import { kStorageKey } from '@/constants/common';

import { UseComponentStoreProps } from './component.type';

const useComponentStore = create<UseComponentStoreProps>((set) => ({
  isBackgroundMusicMuted:
    JSON.parse(localStorage?.getItem(kStorageKey.DarkMode) || 'null') || true,
  isSidebarOpen: false,
  sidebarType: 'filter',
  updateIsSidebarOpen: (value) => {
    set((state) => {
      return { ...state, isSidebarOpen: value };
    });
  },
  updateIsBackgroundMusicMuted: (value) => {
    set((state) => {
      localStorage.setItem(kStorageKey.DarkMode, value?.toString());
      return { ...state, isBackgroundMusicMuted: value };
    });
  },
  updateSidebarType(value) {
    set((state) => {
      return { ...state, sidebarType: value };
    });
  },
}));

export default useComponentStore;
