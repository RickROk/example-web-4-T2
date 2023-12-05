export const useScrollToElement = (
  element: HTMLElement | null,
  top: number | undefined = 16,
  behavior: ScrollBehavior | undefined = 'smooth'
) => {
  if (element) {
    const variable: any = element?.offsetTop
    window.scrollTo({
      top: element?.offsetTop,
      left: 0,
      behavior
    })
  }
}
