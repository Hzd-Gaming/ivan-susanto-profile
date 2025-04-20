import { create } from 'zustand';

import { kStorageKey } from '@/constants/common';

import { UseComponentStoreProps } from './component.type';

const useComponentStore = create<UseComponentStoreProps>((set) => ({
  footerDescription: '',
  isBackgroundMusicMuted: true,
  isSidebarOpen: false,
  sidebarType: 'filter',
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
  updateSidebarType(value) {
    set((state) => {
      return { ...state, sidebarType: value };
    });
  },
}));

export default useComponentStore;
