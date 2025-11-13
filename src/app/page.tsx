// src/app/page.tsx
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryOne from "./components/categories/category-one";
import PopularListingOne from "./components/popular-listing-one";
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top";
import NavbarServerWrapper from '@/app/components/navbar/navabar-server'
import { generateSEOMetadata } from '../../lib/useSeo';
import FormTwo from "./components/form/form-two";
import ExploreCity from "./components/explore-city";
import HowItsWork from "./components/how-its-work";
import WorkingProcessTwo from "./components/working-process-two";
import { ListingContext } from "./lib/data";
import { Metadata } from "next";

export default function Home() {
    return (
        <>
            <NavbarServerWrapper />

            <div 
                className="image-cover hero-header position-relative" 
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
                }} 
                data-overlay="6"
            >
                <div className="container">
                    <div className="row justify-content-center align-items-center mb-5 pt-lg-0 pt-5">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12 mx-auto">
                            <div className="position-relative text-center">
                                <h1 className="display-4 fw-bold text-light">
                                    Discover Trusted Business Listings In Saudi Arabia
                                </h1>
                                <p className="fs-5 fw-light text-light">
                                    Your comprehensive guide to finding contacts, locations, and services from trusted businesses across the Kingdom.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <FormTwo /> */}
                </div>
                <div className="mousedrop z-1"><Link href="#mains" className="mousewheel"><BsMouse /></Link></div>
            </div>

            {/* Coming Soon Section */}
            <section className="py-5" id="mains">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12">
                            <div className="text-center py-5">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'var(--bs-primary-bg-subtle)',
                                        color: 'var(--bs-primary)'
                                    }}
                                >
                                    <BsRocketTakeoff size={48} />
                                </div>
                                <h2 className="display-5 fw-bold mb-3">Business Listings Coming Soon!</h2>
                                <p className="fs-5 text-muted mb-4">
                                    We're currently building Saudi Arabia's most comprehensive business directory. 
                                    Stay tuned as we add verified businesses across all 13 regions.
                                </p>
                                <div className="d-flex flex-wrap gap-3 justify-content-center">
                                    <Link href="/add-listing" className="btn btn-primary btn-lg rounded-pill px-5">
                                        Register Your Business
                                    </Link>
                                    <Link href="/about-us" className="btn btn-outline-primary btn-lg rounded-pill px-5">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview Categories */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-xl-10 col-lg-11 col-md-12">
                            <div className="text-center mb-4">
                                <h3 className="fw-semibold">Categories We'll Feature</h3>
                                <p className="text-muted">Businesses across all major industries in Saudi Arabia</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Real Estate</h5>
                                        <p className="text-muted small mb-0">Properties, rentals & developers</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Construction & Engineering</h5>
                                        <p className="text-muted small mb-0">Contractors & consultants</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Retail & Shopping</h5>
                                        <p className="text-muted small mb-0">Malls, stores & boutiques</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Healthcare</h5>
                                        <p className="text-muted small mb-0">Hospitals, clinics & pharmacies</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Hospitality & Tourism</h5>
                                        <p className="text-muted small mb-0">Hotels, restaurants & travel</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Technology & Innovation</h5>
                                        <p className="text-muted small mb-0">IT, software & telecom</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Professional Services</h5>
                                        <p className="text-muted small mb-0">Legal, accounting & consulting</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">Manufacturing</h5>
                                        <p className="text-muted small mb-0">Factories & industrial suppliers</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card border-0 shadow-sm h-100 text-center p-4">
                                        <h5 className="fw-semibold mb-2">And More...</h5>
                                        <p className="text-muted small mb-0">Growing daily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision 2030 Badge */}
                    <div className="row justify-content-center mt-5 pt-4">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="card border-0 bg-light-primary rounded-4 p-4 text-center">
                                <p className="mb-2 fw-semibold text-primary">Supporting Saudi Vision 2030</p>
                                <p className="mb-0 text-muted small">
                                    Empowering businesses with digital tools to contribute to the Kingdom's economic transformation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commented out sections for when you have listings */}
            {/* <section className="pb-0" id="mains">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center mb-5">
                                <h2 className="sectionHeading">Search Listings By Category</h2>
                                <p>From neighborhood entrepreneurs to international suppliers, Saudi Bizz Directory connects you with businesses that serve, support, and trade across the Kingdom.</p>
                            </div>
                        </div>
                    </div>
                    <CategoryOne />
                </div>
            </section> */}

            {/* <section>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h3 className="sectionHeading">Trending & Popular <span className="text-primary">Listings</span></h3>
                                <p>Explore Hot & Popular Business Listings</p>
                            </div>
                        </div>
                    </div>
                    <PopularListingOne context={ListingContext.LOCAL} />
                </div>
            </section> */}

            {/* <section className="bg-light">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h2 className="sectionHeading">Explore Top Business Hubs in Saudi Arabia</h2>
                                <p>From Riyadh's financial district to Jeddah's bustling waterfront — discover local businesses across Saudi Arabia's most active regions.</p>
                            </div>
                        </div>
                    </div>
                    <ExploreCity />
                </div>
            </section> */}

            <section className="light-top-gredient">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                            <div className="secHeading-wrap text-center">
                                <h3 className="sectionHeading">See How It  <span className="text-primary">Works</span></h3>
                                <p>Connecting with trusted businesses across Saudi Arabia has never been this easy. Whether you're searching for local services or want to list your own business, it's simple in just a few steps.</p>
                            </div>
                        </div>
                    </div>
                    <HowItsWork />
                </div>
            </section>
            
            <WorkingProcessTwo />

            <Footer />
            <BackToTop />
        </>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return generateSEOMetadata('/')
}