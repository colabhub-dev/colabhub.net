import type { User } from "~/share/types";

export const useAuth = () => {
  const triedToFetch = useState<boolean>("triedToFetch", () => false);
  const user = useState<User | null>("user", () => null);
  const isLogin = computed(() => user.value !== null);

  onMounted(async () => {
    if (triedToFetch.value) return; // Avoid fetching user again if already tried
    triedToFetch.value = true;
    user.value = await $fetch("/api/auth/me", {
      onRequestError: (err) => {
        if (err.response && err.response.status === 401) {
          user.value = null; // Clear user on unauthorized access
        } else {
          console.error("Failed to fetch user:", err);
        }
      },
    });
  });

  return { user, isLogin };
};
