import { ref } from 'vue'
export function useModal() {
  const modal = ref(false)

  function toggle() {
    modal.value = !modal.value
  }
  function close() {
    modal.value = false
  }

  return { modal, toggle, close }
}
