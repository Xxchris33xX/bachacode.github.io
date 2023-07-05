import { ref } from 'vue'
export function useModal() {
  const modal = ref(false)

  function toggle() {
    modal.value = !modal.value
  }
  function close() {
    modal.value = false
  }

  // expose managed state as return value
  return { modal, toggle, close }
}
