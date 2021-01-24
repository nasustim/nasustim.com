const scroll = (_id: string) => {
  const _element = document.getElementById(_id)
  if (_element) {
    window.scrollTo({
      top: window.pageYOffset + _element.getBoundingClientRect().top - 80,
      behavior: 'smooth',
    })
  }
}

export default scroll
