import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type TUser = {
	_id: string;
	username: string;
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
