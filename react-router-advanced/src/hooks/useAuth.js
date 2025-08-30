import { useState } from "react";

/**
 * Simple fake authentication hook.
 * In a real app this could come from context or a global store.
 */
export function useAuth() {
  // 🔑 Simulate a logged-in user (toggle this to false for testing)
  const [isAuthenticated] = useState(true);

  return { isAuthenticated };
}
