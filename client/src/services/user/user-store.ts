import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TUser = {
  _id: string;
  username: string;
  token: string;
};
type TUserState = {
  user: TUser | null;
  setUser: (user: TUser) => void;
};

export const useUserStore = create<TUserState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user: TUser) => set({ user }),
    }),
    { name: 'userStore' }
  )
);
