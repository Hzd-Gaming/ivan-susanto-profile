import { create } from 'zustand';

import { kStorageKey } from '@/constants/common';

import { UseComponentStoreProps } from './component.type';

const useComponentStore = create<UseComponentStoreProps>((set) => ({
  footerDescription: '',
  isBackgroundMusicMuted: true,
  isSidebarOpen: false,
  updateFooterDescription(value) {
    set((state) => {
      return { ...state, footerDescription: value };
    });
  },
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
}));

export default useComponentStore;
