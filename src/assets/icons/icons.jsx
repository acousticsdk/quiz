const icons = import.meta.glob('../../assets/icons/*.{svg,jpg,jpeg,png}', { eager: true, as: 'url' })
Object.keys(icons).forEach(el => {
    icons[el.substring(2)] = icons[el];
    delete icons[el]}
)

export default icons