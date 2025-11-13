// src/app/components/popular-listing-one.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

// Import the data and the type from your single data file
import { listData, ListData as ListType } from '../data/data';
import { ListingContext } from '../lib/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { BsGeoAlt, BsPatchCheckFill, BsSuitHeart, BsTelephone } from 'react-icons/bs';

interface PopularListingOneProps {
    context?: ListingContext;
}

/**
 * PopularListingOne Component
 * 
 * Displays featured listings in a carousel format with dynamic URL routing.
 * 
 * @param context - The listing context to determine which listings to show:
 *   - ListingContext.LOCAL: Shows only Saudi listings (uses /listings/ URLs)
 *   - ListingContext.GLOBAL: Shows only non-Saudi listings (uses /global-listings/ URLs)
 *   - ListingContext.ALL: Shows all listings (uses /listings/ URLs by default)
 * 
 * @example
 * // For Saudi listings (default)
 * <PopularListingOne context={ListingContext.LOCAL} />
 * 
 * @example
 * // For global listings
 * <PopularListingOne context={ListingContext.GLOBAL} />
 */

export default function PopularListingOne({ context = ListingContext.LOCAL }: PopularListingOneProps) {
    const ratingStyles = {
        high: 'bg-primary',
        mid: 'bg-warning',
        low: 'bg-danger'
    }

    // Helper function to check if a listing is from Saudi Arabia
    const isSaudiListing = (listing: ListType): boolean => {
        const SAUDI_LOCATIONS = [
            // Riyadh Region
            'riyadh', 'al-kharj', 'diriyah', 'al-muzahimiyah', 'thadiq',
            
            // Makkah Region
            'makkah', 'mecca', 'jeddah', 'taif', 'rabigh', 'khulais', 'ranyah',
            'turubah', 'jumum', 'al-kamil', 'al-muwayh', 'maysan', 'adham',
            
            // Madinah Region
            'madinah', 'medina', 'yanbu', 'al-ula', 'mahd ad-dahab', 'badr',
            'khaybar', 'al-hanakiyah', 'wadi al-fara',
            
            // Eastern Province
            'dammam', 'dhahran', 'khobar', 'al-khobar', 'jubail', 'al-jubail',
            'al-ahsa', 'hofuf', 'al-hofuf', 'mubarraz', 'qatif', 'al-qatif',
            'ras tanura', 'khafji', 'abqaiq', 'al-nairyah', 'qaisumah',
            
            // Asir Region
            'abha', 'khamis mushait', 'najran', 'bisha', 'muhayil', 'sarat abidah',
            'ahad rafidah', 'bareq', 'majardah', 'rijal almaa',
            
            // Qassim Region
            'buraidah', 'unaizah', 'al-rass', 'al-mithnab', 'al-badayea',
            'riyadh al-khabra', 'al-bukayriyah', 'dhabiyah',
            
            // Ha\'il Region
            'hail', 'baqaa', 'al-ghazalah', 'shamli', 'al-shunan', 'mawqaq',
            
            // Tabuk Region
            'tabuk', 'duba', 'tayma', 'haql', 'al-wajh', 'dhuba', 'umluj',
            
            // Northern Borders Region
            'arar', 'rafha', 'turaif', 'al-uwayqilah',
            
            // Jazan Region
            'jazan', 'jizan', 'sabya', 'abu arish', 'samtah', 'farasan',
            'al-darb', 'baish', 'al-aydabi', 'al-tuwal', 'damad',
            
            // Najran Region
            'najran', 'sharurah', 'habuna', 'badr al-janoub', 'yadamah',
            
            // Al-Bahah Region
            'al-bahah', 'bahah', 'baljurashi', 'al-mandaq', 'al-mikhwah',
            'al-aqiq', 'qilwah', 'al-qura',
            
            // Al-Jawf Region
            'sakaka', 'al-qurayyat', 'dumat al-jandal', 'tabarjal'
        ];
        
        const cityLower = listing.city.toLowerCase();
        const locationLower = listing.location.toLowerCase();
        
        return SAUDI_LOCATIONS.some(saudiCity => 
            cityLower.includes(saudiCity) || locationLower.includes(saudiCity)
        );
    };

    // Filter listings based on context and featured status
    const featuredListings = listData.filter((item: ListType) => {
        if (!item.featured) return false;
        
        if (context === ListingContext.LOCAL) {
            return isSaudiListing(item);
        } else if (context === ListingContext.GLOBAL) {
            return !isSaudiListing(item);
        }
        
        return true; // For ListingContext.ALL
    });

    // Determine the correct URL prefix based on context
    const getUrlPrefix = () => {
        return context === ListingContext.GLOBAL ? '/global-listings' : '/listings';
    };

    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                {featuredListings.length > 0 ? (
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={25}
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }}
                    >
                        {featuredListings.map((item: ListType) => {
                            // Updated to handle the new data structure
                            const primaryCategory = item.categories.find(cat => cat.isPrimary);
                            const displayCategory = primaryCategory || item.categories[0];
                            const ratingClass = ratingStyles[item.rating] || 'bg-primary';
                            
                            return (
                                <SwiperSlide className="singleItem h-100" key={item.id}>
                                    <div className="listingitem-container">
                                        <div className="singlelisting-item uniform-listing-card">
                                            
                                            <div className="listing-top-item">
                                                <Link href={`${getUrlPrefix()}/${displayCategory?.slug}/${item.slug}`} className="topLink">
                                                    <div className="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                                                        <div className="d-flex align-items-center justify-content-start gap-2">
                                                            <span className={`badge badge-xs text-uppercase ${item.isVerified ? 'listOpen' : 'listClose'}`}>
                                                                {item.statusText}
                                                            </span>
                                                            <span className="badge badge-xs badge-transparent">
                                                                <BsStars className="mb-0 me-1"/>Featured
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Image
                                                        src={item.image}
                                                        width={400}
                                                        height={250}
                                                        alt={item.title}
                                                        className="img-fluid"
                                                        style={{ width: '100%', height: '270px', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                                <div className="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                                                    <Link 
                                                        href={`${getUrlPrefix()}/${displayCategory?.slug}/${item.slug}`} 
                                                        className="bookmarkList" 
                                                        data-bs-toggle="tooltip" 
                                                        data-bs-title="Save Listing"
                                                    >
                                                        <BsSuitHeart className="m-0"/>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="listing-middle-item">
                                                <div className="listing-details">
                                                    <h4 className="listingTitle">
                                                        <Link href={`${getUrlPrefix()}/${displayCategory?.slug}/${item.slug}`} className="titleLink">
                                                            {item.title}
                                                            {item.isVerified && (
                                                                <span className="verified">
                                                                    <BsPatchCheckFill className="bi bi-patch-check-fill m-0"/>
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                                {/* <div className="listing-info-details">
                                                    <div className="d-flex align-items-center justify-content-start gap-4">
                                                        <div className="list-calls">
                                                            <BsTelephone className="mb-0 me-2"/>{item.call}
                                                        </div>
                                                        <div className="list-distance">
                                                            <BsGeoAlt className="mb-0 me-2"/>{item.location}
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>

                                            <div className="listing-footer-item">
                                                <div className="d-flex align-items-center justify-content-between gap-2">
                                                    <div className="catdWraps">
                                                        <div className="flex-start">
                                                            <Link 
                                                                href={`${getUrlPrefix()}/${displayCategory?.slug}/${item.slug}`} 
                                                                className="d-flex align-items-center justify-content-start gap-2"
                                                            >
                                                                <span className="catTitle">{displayCategory?.name || item.subCategory}</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="listing-rates">
                                                        <div className="d-flex align-items-center justify-content-start gap-1">
                                                            <span className={`ratingAvarage ${item.rating}`}>
                                                                {item.ratingRate}
                                                            </span>
                                                            <span className="overallrates">{item.review}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <div className="text-center py-5">
                        <p className="text-muted">No featured listings available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}