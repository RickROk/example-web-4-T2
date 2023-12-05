export const useSwitch = (defaultValue = false) => {
  const isOpen = ref<boolean>(defaultValue)

  const open = (): void => {
    isOpen.value = true
  }

  const close = (): void => {
    isOpen.value = false
  }

  const toggle = (): void => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    open,
    close,
    toggle
  }
}
