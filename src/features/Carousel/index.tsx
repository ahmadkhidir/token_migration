import styles from './Carousel.module.scss'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// import data from '../../data.json'
import { createRef } from 'react';
import rank_icon from './assets/rank.png'
import { useAppSelector } from '../../app/hooks';
import { selectData } from './carouselSlice';


export function Carousel() {
	const data = useAppSelector(selectData).slice(0, 20)
	return (
		<section className={styles.carousel}>
			<Slider
				arrows={false}
				dots={false}
				infinite={true}
				speed={400}
				autoplaySpeed={2000}
				slidesToShow={1}
				slidesToScroll={1}
				autoplay={true}
				variableWidth={true}
				cssEase='ease-out'
			>
				{data.map((item, index) => (
					<a href={item.url} className={styles.item} key={index}>
						<section className={styles.content}>
							<img src={item.logo} className={styles.icon} alt="coin icon" draggable={false} />
							<div className={styles.div}>
								<p>{item.name}</p>
								<p>{item.symbol}</p>
							</div>
							<div className={styles.div2}>
								<p>${parseFloat(item.price).toFixed(2)}</p>
								<p className={item.percent_change.charAt(0) === '-' ? styles.fall : styles.rise}>{parseFloat(item.percent_change).toFixed(2)}%</p>
							</div>
						</section>

					</a>
				))}
			</Slider>
		</section>
	)
}



export function ContentRow() {
	const data = useAppSelector(selectData).slice(20,30)
	return (
		<section className={styles.content_row}>
			{data.map((item, index) => (
				<section key={index} className={styles.item}>
					<img src={item.logo} className={styles.icon} alt='coin icon' draggable={false} />
					<h1>{item.name}</h1>
					<p>${parseFloat(item.price).toFixed(5)}</p>
					<div className={item.percent_change.charAt(0) === '-' ? styles.fall : styles.rise}>
						<p>{parseFloat(item.percent_change).toFixed(2)}%</p>
					</div>
				</section>
			))}
		</section>
	)
}

const caroRef = createRef<Slider>()

export function FullCarousel() {
	const data = useAppSelector(selectData).slice(0,30)
	return (
		<section className={styles.full_carousel}>
			<section className={styles.container}>
				<Slider
					ref={caroRef}
					slidesToShow={1}
					slidesToScroll={1}
					arrows={false}
					dots={false}
					fade={true}
				>
					{data.map((item, index) => (
						<section className={styles.item} key={index}>
							<section className={styles.content}>
								<section className={styles.sec1}>
									<div className={styles.rank}>
										<img src={item.logo} alt='icon' draggable={false} />
									</div>
									<div className={styles.div2}>
										<a href={item.url}>{item.name} ({item.symbol})</a>
										<p className={styles.big}>{parseFloat(item.price).toFixed(8)}
											<small>USD</small>
											<span className={item.percent_change.charAt(0) === '-' ? styles.fall : styles.rise}>
												({parseFloat(item.percent_change).toFixed(2)}%)
											</span>
										</p>
									</div>
									<div className={styles.empty_space}></div>
								</section>
								<section className={styles.sec2}>
									<div>
										<label>RANK</label>
										<p>{item.rank}</p>
									</div>
									<div>
										<label>MARKET CAP</label>
										<p>${parseFloat(item.market_cap).toFixed(2)}<small>USD</small></p>
									</div>
									<div>
										<label>VOLUME</label>
										<p>${parseFloat(item.volume).toFixed(2)}<small>USD</small></p>
									</div>
								</section>
							</section>
						</section>
					))}
				</Slider>
				<section className={styles.arrows}>
						<button onClick={() => caroRef.current!.slickPrev()} className={styles.prev}></button>
						<button onClick={() => caroRef.current!.slickNext()} className={styles.next}></button>
				</section>
			</section>
		</section>
	)
}