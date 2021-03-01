const loadMoreBtn = {
    refs: {
        node:  document.querySelector('[data-action="load-more"]'),
        lable: document.querySelector('[data-action="load-more"] > .lable'),
        spinner: document.querySelector('[data-action="load-more"] > .spinner')
    },
    enable() {
        this.refs.node.disabled = false,
        this.refs.lable.textContent = 'Show more',
        this.refs.spinner.classList.add('is-hidden')
    },
    disable() {
        this.refs.node.disabled = true,
        this.refs.lable.textContent = 'Loading...',
        this.refs.spinner.classList.remove('is-hidden')
    },
    show() {
        this.refs.node.classList.remove('is-hidden')
    }
}

export default loadMoreBtn
