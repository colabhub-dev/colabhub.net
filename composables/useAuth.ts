import type {User} from "~/share/types";

export const useAuth = () => {
  const triedToFetch = useState<boolean>('triedToFetch', () => false);
  const user = useState<User | null>('user', () => null);
  const isLogin = computed(() => user.value !== null);

  onMounted(async () => {
    if (triedToFetch.value) return; // Avoid fetching user again if already tried
    triedToFetch.value = true;
    try {
      user.value = await $fetch("/api/auth/me");
    } catch (error) {
    }
  });

  return {user, isLogin};
}