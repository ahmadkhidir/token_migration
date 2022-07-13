import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import styles from './WalletProducts.module.scss'
import search_icon from './assets/search.svg'
import { Link, useNavigate } from 'react-router-dom'

export function WalletProducts(props: any) {
    const paginate = 20
    const [page, setPage] = useState(1)
    const data = useAppSelector(state => state.carousel.data)
    const rem = data.length % paginate
    let total_pages = (data.length - rem) / paginate
    if (rem) total_pages += 1
    const pages = Array.from(Array(total_pages + 1).keys()).slice(1)
    const current_data = data.slice((page - 1) * paginate, paginate * page)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate(`/wallet/connect/${search}`)
    }

    return (
        <section className={styles.wallet_products}>
            <form onSubmit={handleSubmit} className={styles.search_bar}>
                <input required
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search'
                />
                <button>
                    <img src={search_icon} alt='search' />
                </button>
            </form>
            <section className={styles.items}>
                {current_data.map(item => (
                    <Link to={`/wallet/connect/${item.name}`} key={item.rank} className={styles.item}>
                        <img src={item.logo} alt='icon' />
                        <label>{item.name}</label>
                    </Link>
                ))}
            </section>
            <ul className={styles.dots}>
                {pages.map(i => (
                    <li key={i}
                        title={page === i ? 'current' : undefined}
                        onClick={() => setPage(i)}
                        className={styles.dot}>{i}</li>
                ))}
            </ul>
        </section>
    )
}