import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import styles from '../../styles/Carousel.module.css';
import singleStyles from '../../styles/Homepage.module.css';

function Carousel({ attractions, carousel_id, itineraryCarousel, size, singleCarousel }) {
	const carouselItems = itineraryCarousel
		? attractions
		: singleCarousel
			? (attractions = attractions)
			: attractions[carousel_id].map((carousel) => carousel);

	const [ index, setIndex ] = useState(0);
	const [ prevBtnTimeout, setPrevBtnTimeout ] = useState(false);
	const [ nextBtnTimeout, setNextBtnTimeout ] = useState(false);

	const nextSlide = useCallback(
		() => {
			setIndex((oldIndex) => {
				let index = oldIndex + 1;
				if (index > cloned.length - 1) {
					index = 0;
				}
				return index;
			});
		},
		//eslint-disable-next-line
		[ setIndex ]
	);

	const prevBtn = () => {
		setPrevBtnTimeout(true);
		setTimeout(() => {
			setIndex((oldIndex) => {
				let index = oldIndex - 1;
				if (index < 0) {
					index = cloned.length - 1;
				}
				return index;
			});
			setPrevBtnTimeout(false);
		}, 200);
	};
	const nextBtn = () => {
		setNextBtnTimeout(true);
		setTimeout(() => {
			nextSlide();
			setNextBtnTimeout(false);
		}, 200);
	};

	useEffect(
		() => {
			let slider = setInterval(nextSlide, 3000);
			return () => clearInterval(slider);
		},
		[ index, nextSlide ]
	);

	const cloned = carouselItems.slice();

	if (carouselItems.length === 4 && !singleCarousel) {
		const firstClone = carouselItems[0];
		const secondClone = carouselItems[1];
		const secondToLastClone = carouselItems[carouselItems.length - 2];
		const lastClone = carouselItems[carouselItems.length - 1];

		cloned.unshift(lastClone);
		cloned.unshift(secondToLastClone);
		cloned.unshift(secondClone);
		cloned.unshift(firstClone);
		cloned.push(firstClone);
		cloned.push(secondClone);
		cloned.push(secondToLastClone);
		cloned.push(lastClone);
	}

	if (carouselItems.length === 3 && !singleCarousel) {
		const firstClone = carouselItems[0];
		const secondClone = carouselItems[1];
		const lastClone = carouselItems[carouselItems.length - 1];

		cloned.unshift(lastClone);
		cloned.unshift(secondClone);
		cloned.unshift(firstClone);
		cloned.push(firstClone);
		cloned.push(secondClone);
		cloned.push(lastClone);
	}

	return (
		<React.Fragment>
			<section className={styles.carouselWrapper}>
				<div className={styles['carousel-standard']}>
					{!singleCarousel && (
						<div className={styles.carouselItems}>
							{cloned.map((carouselItem, carouselIndex) => {
								const {
									attraction,
									image_url,
									image_alt,
									cc_image_url,
									cc_author_url,
									cc_author,
									cc_license,
									cc_license_url
								} = carouselItem;

								let position = 'nextSlide';

								if (carouselIndex === index) {
									position = 'activeSlide';
								}
								if (
									size >= 501 &&
									(carouselIndex === index + 1 ||
										(carouselIndex === 0 &&
											index === cloned.length - 1))
								) {
									position = 'activeSlide2';
								}

								if (
									size >= 800 &&
									(carouselIndex === index + 2 ||
										(carouselIndex === 0 &&
											index === cloned.length - 2) ||
										(carouselIndex === 1 &&
											index === cloned.length - 1))
								) {
									position = 'activeSlide3';
								}

								if (
									carouselIndex === index - 1 ||
									(index === 0 && carouselIndex === cloned.length - 1)
								) {
									position = 'lastSlide';
								}

								return (
									<div
										key={`carousel-${carouselIndex + 1}`}
										className={
											styles[position] +
											' ' +
											styles['carouselItem']
										}
									>
										<Image
											alt={image_alt}
											src={image_url}
											width={640}
											height={480}
										/>
										<p className={styles['carousel-item-text']}>
											<strong
												className={styles['carousel-item-title']}
											>
												{attraction}
											</strong>
											<br />
											<span
												className={
													styles['carousel-item-credits']
												}
											>
												<a
													href={cc_image_url}
													target="_blank"
													rel="noopener noreferrer"
												>
													Photo
												</a>{' '}
												by{' '}
												<a
													href={cc_author_url}
													target="_blank"
													rel="noopener noreferrer"
												>
													{cc_author}
												</a>
												<br />
												{cc_license === null ? (
													<i>Edited</i>
												) : (
													<React.Fragment>
														<a
															href={cc_license_url}
															target="_blank"
															rel="noopener noreferrer"
														>
															{cc_license}
														</a>
														{' | '}
														<i>Edited</i>
													</React.Fragment>
												)}
											</span>
										</p>
									</div>
								);
							})}
						</div>
					)}
					{singleCarousel && (
						<div className={singleStyles.singleCarouselItems}>
							{cloned.map((carouselItem, carouselIndex) => {
								const {
									image_location,
									image_url,
									image_alt
								} = carouselItem;

								let position = 'nextSlide';
								if (carouselIndex === index) {
									position = 'activeSlide';
								}
								if (
									carouselIndex === index - 1 ||
									(index === 0 &&
										carouselIndex === carouselItems.length - 1)
								) {
									position = 'lastSlide';
								}

								return (
									<div
										key={carouselIndex}
										className={
											styles[position] +
											' ' +
											styles['carouselItem'] +
											' ' +
											singleStyles['single-carousel-container']
										}
									>
										<Image
											className={
												singleStyles['single-carousel-image']
											}
											alt={image_alt}
											src={image_url}
											width={640}
											height={480}
										/>
										<div
											className={
												singleStyles['single-carousel-text']
											}
										>
											<h3
												className={
													singleStyles['single-carousel-title']
												}
											>
												{image_location}
											</h3>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
				{!singleCarousel && (
					<div className={styles.dotsContainer}>
						<button
							className={styles.prev}
							onClick={prevBtnTimeout ? null : prevBtn}
						>
							<FiArrowLeftCircle className={styles.icon} />
						</button>
						<button
							className={styles.next}
							onClick={nextBtnTimeout ? null : nextBtn}
						>
							<FiArrowRightCircle className={styles.icon} />
						</button>
					</div>
				)}
			</section>
		</React.Fragment>
	);
}

export default Carousel;
