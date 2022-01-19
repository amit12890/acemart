import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import { useStyle } from '../../classify';
import Image from '../Image';
import footerPayment from '../../../assets/footer-payment.png';
import defaultClasses from './footer.css';
import * as UrlFuncs from '../../../url.utils';
import NewsletterSubscriptionInput from '../../../components/AccountPage/newsletterSubscriptionInput';
import { useQuery } from '@apollo/client';
import { GET_FOOTER_GQL } from './footer.gql';
import RichContent from '../RichContent';
import { get, size } from 'lodash-es';


const Footer = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();

    const { data, loading } = useQuery(GET_FOOTER_GQL, { fetchPolicy: 'cache-and-network' })
    const footerCol1 = get(data, "footerColumn1.items[0].content", "")
    const footerCol2 = get(data, "footerColumn2.items[0].content", "")
    const footerCol3 = get(data, "footerColumn3.items[0].content", "")
    const footerCol4 = get(data, "footerColumn4.items[0].content", "")

    const { copyrightText } = talonProps;

    const handleShipClick = useCallback(() => {
        const ele = document.getElementById('ship_policy/');
        if (ele) {
            ele.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    const handleReturnClick = useCallback(() => {
        const ele = document.getElementById('return_policy/');
        if (ele) {
            ele.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    const handleSecurityClick = useCallback(() => {
        const ele = document.getElementById('security/');
        if (ele) {
            ele.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    return (
        <footer className={classes.root}>
            <div className={[classes.footerSectionWrapper, classes.sectionTop].join(" ")}>
                <div className={[classes.footerContainer, classes.containerTop].join(" ")}>
                    <div className={[classes.contentBlock, classes.blockUpper].join(" ")}>
                        <div className={classes.companyService}>
                            <div className={classes.serviceItem}>
                                <Link
                                    to="/terms-of-use#ship_policy/"
                                    className={classes.action}
                                    onClick={handleShipClick}
                                >
                                    <div className={classes.itemIcon}>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32">
                                                <title>truck</title>
                                                <path d="M11.438 25.438q0-0.938-0.672-1.609t-1.609-0.672-1.625 0.672-0.688 1.609 0.688 1.609 1.625 0.672 1.609-0.672 0.672-1.609v0zM4.563 16.281h6.875v-4.563h-2.844q-0.031 0-0.188 0.063t-0.188 0.094l-3.5 3.469q-0.031 0.063-0.094 0.203t-0.063 0.203v0.531zM27.438 25.438q0-0.938-0.672-1.609t-1.609-0.672-1.625 0.672-0.688 1.609 0.688 1.609 1.625 0.672 1.609-0.672 0.672-1.609zM32 6v18.281q0 1-0.813 1.078t-1.469 0.078q0 1.875-1.344 3.219t-3.219 1.344q-1.906 0-3.25-1.344t-1.344-3.219h-6.844q0 1.875-1.344 3.219t-3.219 1.344q-1.906 0-3.25-1.344t-1.344-3.219h-1.125q-0.688 0-1.484-0.078t-0.797-1.078q0-0.469 0.328-0.797t0.797-0.328v-5.719q0-0.969 0.031-1.953t0.781-1.703l3.531-3.563q0.344-0.313 0.906-0.547t1.031-0.234h2.875v-3.438q0-0.469 0.328-0.813t0.797-0.344h18.281q0.469 0 0.813 0.344t0.344 0.813v0z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                    <div className={classes.itemContent}>
                                        <h4 className={classes.itemTitle}>Fast Shipping</h4>
                                        <p className={classes.itemSubTitle}>On every order, every day!</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={classes.serviceItem}>
                                <Link
                                    to="/terms-of-use#security/"
                                    className={classes.action}
                                    onClick={handleSecurityClick}
                                >
                                    <div className={classes.itemIcon}>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="21" height="32" viewBox="0 0 21 32">
                                                <title>lock</title>
                                                <path d="M5.719 14h9.125v-3.438q0-1.875-1.328-3.219t-3.234-1.344q-1.875 0-3.219 1.344t-1.344 3.219v3.438zM20.563 15.719v10.281q0 0.719-0.5 1.219t-1.219 0.5h-17.125q-0.719 0-1.219-0.5t-0.5-1.219v-10.281q0-0.719 0.5-1.219t1.219-0.5h0.563v-3.438q0-1.625 0.625-3.094 0.656-1.469 1.734-2.547t2.547-1.703q1.438-0.656 3.094-0.656t3.094 0.656q1.469 0.625 2.563 1.703t1.719 2.547 0.625 3.094v3.438h0.563q0.719 0 1.219 0.5t0.5 1.219v0z"></path>
                                            </svg>

                                        </i>
                                    </div>
                                    <div className={classes.itemContent}>
                                        <h4 className={classes.itemTitle}>Secure Payment</h4>
                                        <p className={classes.itemSubTitle}>We value your security</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={classes.serviceItem}>
                                <Link
                                    to="/financing"
                                    className={classes.action}>
                                    <div className={classes.itemIcon}>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32">
                                                <title>gitf-card</title>
                                                <path d="M13.719 20.844h6.844v-1.688h-2.281v-8h-2.031l-2.656 2.438 1.375 1.438q0.344-0.281 0.563-0.484t0.438-0.547h0.031v5.156h-2.281v1.688zM22.844 16.281q0 1.219-0.344 2.531-0.375 1.313-1.094 2.406t-1.781 1.781q-1.063 0.719-2.469 0.719t-2.5-0.719q-1.063-0.688-1.781-1.781t-1.094-2.406q-0.344-1.313-0.344-2.531t0.344-2.531q0.375-1.313 1.094-2.406t1.781-1.781q1.094-0.719 2.5-0.719t2.469 0.719q1.063 0.688 1.781 1.781t1.094 2.406q0.344 1.313 0.344 2.531zM32 20.844v-9.125q-1.875 0-3.219-1.344t-1.344-3.219h-20.594q0 1.875-1.328 3.219t-3.234 1.344v9.125q1.906 0 3.234 1.344t1.328 3.25h20.594q0-1.906 1.344-3.25t3.219-1.344v0zM34.281 6v20.563q0 0.469-0.328 0.813t-0.797 0.344h-32q-0.469 0-0.813-0.344t-0.344-0.813v-20.563q0-0.469 0.344-0.813t0.813-0.344h32q0.469 0 0.797 0.344t0.328 0.813z"></path>
                                            </svg>
                                        </i>
                                    </div>
                                    <div className={classes.itemContent}>
                                        <h4 className={classes.itemTitle}>Financing Available</h4>
                                        <p className={classes.itemSubTitle}>Qualify today in only a few minutes!</p>
                                    </div>
                                </Link>
                            </div>

                            <div className={classes.serviceItem}>
                                <Link
                                    to="/customer-service"
                                    className={classes.action}>
                                    <div className={classes.itemIcon}>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <title>phone</title>
                                                <path d="M22 20q-1.5 1.5-2 2.75t-2 1.25-3-1.25-3-2.75-2.75-3-1.25-3 1.25-2 2.75-2q0.75-0.75 0.188-2.094t-1.688-2.656-2.438-2.281-2.063-0.969-1.781 0.938-1.969 2.063-1.594 2.063l-0.656 0.938q0 1.5 0.688 3.625 0.719 2.156 1.859 4.422t2.547 4.359q1.438 2.125 2.906 3.594t3.594 2.906q2.094 1.406 4.359 2.547t4.422 1.859q2.125 0.688 3.625 0.688l0.938-0.656t2.063-1.594 2.063-1.969 0.938-1.781-0.969-2.063-2.281-2.438-2.656-1.688-2.094 0.188z"></path>
                                            </svg>

                                        </i>
                                    </div>
                                    <div className={classes.itemContent}>
                                        <h4 className={classes.itemTitle}>Excellent Customer Service</h4>
                                        <p className={classes.itemSubTitle}>Support number 1-888-898-8079</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={[classes.footerSectionWrapper, classes.sectionMiddle].join(" ")}>
                <div className={[classes.footerContainer, classes.containerMiddle].join(" ")}>
                    <div className={[classes.contentBlock, classes.blockMiddle].join(" ")}>
                        <div className={classes.blockLeft}>
                            <div className={classes.footerBox}>
                                {size(footerCol1) > 0 && (
                                    <RichContent html={footerCol1} />
                                )}
                                <h3 className={classes.groupTitle}>Customer Center</h3>
                                <ul className={classes.groupLinks}>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.accountPageUrl()}
                                            className={classes.action}
                                        >My Account</Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.customerServiceUrl()}
                                            className={classes.action}
                                        >Customer Service</Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.helpCenterUrl()}
                                            className={classes.action}>
                                            Help Center
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.returnPolicyUrl()}
                                            className={classes.action}
                                            onClick={handleReturnClick}
                                        >
                                            Returns
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.shippingPolicyUrl()}
                                            className={classes.action}
                                            onClick={handleShipClick}
                                        >
                                            Shipping Policies
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={classes.footerBox}>
                                {/* {size(footerCol2) > 0 && (
                                    <RichContent html={footerCol2} />
                                )} */}

                                <h3 className={classes.groupTitle}>Company Info</h3>
                                <ul className={classes.groupLinks}>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.aboutUsUrl()}
                                            className={classes.action}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.careersUrl()}
                                            className={classes.action}>
                                            Careers
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.termsOfUseUrl()}
                                            className={classes.action}>
                                            Terms of Use
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.faqUrl()}
                                            className={classes.action}>
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={classes.footerBox}>
                                {/* {size(footerCol3) > 0 && (
                                    <RichContent html={footerCol3} />
                                )} */}
                                <h3 className={classes.groupTitle}>Tools & Services</h3>
                                <ul className={classes.groupLinks}>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.storeLocatorUrl()}
                                            className={classes.action}>
                                            Store Locator
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.resourcesUrl()}
                                            className={classes.action}>
                                            Resources
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.financingUrl()}
                                            className={classes.action}>
                                            Financing
                                        </Link>
                                    </li>
                                    <li className={classes.link}>
                                        <Link
                                            to={UrlFuncs.cdsUrl()}
                                            className={classes.action}>
                                            Commercial Kitchen Design
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={classes.footerBox}>
                                {/* {size(footerCol4) > 0 && (
                                    <RichContent html={footerCol4} />
                                )} */}
                                <h3 className={classes.groupTitle}>Contact Us</h3>
                                <div className={classes.storeAddress}>
                                    <p>2653 Austin Hwy</p>
                                    <p>San Antonio, TX 78218</p>
                                    <p>888-898-8079</p>
                                </div>
                                <ul className={[classes.groupLinks, classes.groupSocial].join(" ")}>
                                    <li className={classes.socialLinks}>
                                        <a target="_blank" href="https://www.facebook.com/acemart/">
                                            <i className={classes.iconWrapper}>
                                                <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 32">
                                                    <title>facebook</title>
                                                    <path d="M17.125 0.5v4.719h-2.813q-1.625 0-2.109 0.719t-0.484 1.844v3.375h5.219l-0.688 5.281h-4.531v13.563h-5.469v-13.563h-4.563v-5.281h4.563v-3.875q0-1.719 0.5-3 0.5-1.313 1.391-2.203t2.141-1.328q1.25-0.469 2.781-0.469 1.438 0 2.563 0.078t1.5 0.141z"></path>
                                                </svg>
                                            </i>
                                            <span>Facebook</span>
                                        </a>
                                    </li>

                                    <li className={classes.socialLinks}>
                                        <a href="https://twitter.com/AceMart" target="_blank">
                                            <i className={classes.iconWrapper}>
                                                <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="14" viewBox="0 0 30 32">
                                                    <title>twitter</title>
                                                    <path d="M28.938 7.563q-0.594 0.875-1.328 1.625t-1.578 1.375q0.031 0.188 0.031 0.375v0.375q0 2.844-1.094 5.781-1.063 2.906-3.141 5.266t-5.141 3.859-7.031 1.5q-2.469 0-4.719-0.688t-4.156-1.906q0.344 0.031 0.688 0.047t0.719 0.016q2 0 3.828-0.641t3.328-1.828q-1.906-0.031-3.375-1.156t-2.031-2.844q0.281 0.063 0.547 0.078t0.547 0.016q0.406 0 0.781-0.047t0.75-0.141q-2-0.406-3.313-1.984t-1.313-3.672v-0.063q0.563 0.313 1.219 0.5t1.375 0.219q-1.156-0.781-1.859-2.047t-0.703-2.766q0-0.781 0.203-1.516t0.578-1.391q1.063 1.313 2.375 2.375 1.313 1.094 2.828 1.875t3.203 1.219q1.688 0.469 3.5 0.563-0.094-0.313-0.125-0.641t-0.031-0.672q0-2.375 1.688-4.078t4.094-1.703q1.219 0 2.313 0.5t1.875 1.344q1-0.188 1.922-0.547t1.766-0.859q-0.344 1-1 1.828t-1.563 1.359q0.875-0.094 1.719-0.328t1.625-0.578v0z"></path>
                                                </svg>
                                            </i>
                                            <span>Twitter</span>
                                        </a>
                                    </li>

                                    <li className={classes.socialLinks}>
                                        <a href="https://www.instagram.com/acemartrestaurantsupply" target="_blank">
                                            <i className={classes.iconWrapper}>
                                                <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 32">
                                                    <title>instagram</title>
                                                    <path d="M18.281 16.281q0-1.875-1.344-3.219t-3.219-1.344q-1.906 0-3.234 1.344t-1.328 3.219q0 1.906 1.328 3.234t3.234 1.328q1.875 0 3.219-1.328t1.344-3.234zM20.75 16.281q0 1.469-0.563 2.75-0.531 1.281-1.484 2.234t-2.234 1.516q-1.281 0.531-2.75 0.531t-2.75-0.531q-1.281-0.563-2.234-1.516t-1.516-2.234q-0.531-1.281-0.531-2.75t0.531-2.75q0.563-1.281 1.516-2.234t2.234-1.484q1.281-0.563 2.75-0.563t2.75 0.563q1.281 0.531 2.234 1.484t1.484 2.234q0.563 1.281 0.563 2.75zM22.688 8.969q0 0.688-0.484 1.156t-1.172 0.469-1.156-0.469-0.469-1.156 0.469-1.172 1.156-0.484 1.172 0.484 0.484 1.172v0zM13.719 5.031h-1.844q-1.125-0.031-2.281 0.016t-2.219 0.141q-1.063 0.125-1.75 0.406-0.469 0.188-0.844 0.422t-0.719 0.609q-0.375 0.375-0.609 0.734t-0.422 0.828q-0.281 0.688-0.406 1.75t-0.156 2.219-0.031 2.281q0.031 1.094 0.031 1.844t-0.031 1.844q0 1.125 0.031 2.281t0.156 2.219 0.406 1.75q0.188 0.469 0.422 0.844t0.609 0.719q0.344 0.375 0.719 0.609t0.844 0.422q0.688 0.281 1.75 0.406t2.219 0.156 2.281 0.031q1.094-0.031 1.844-0.031t1.844 0.031q1.125 0 2.281-0.031t2.219-0.156 1.75-0.406q0.469-0.188 0.828-0.422t0.734-0.609q0.375-0.344 0.609-0.719t0.422-0.844q0.281-0.688 0.406-1.75 0.094-1.063 0.141-2.219t0.016-2.281v-3.688q0.031-1.125-0.016-2.281t-0.141-2.219q-0.125-1.063-0.406-1.75-0.188-0.469-0.422-0.828t-0.609-0.734-0.734-0.609-0.828-0.422q-0.688-0.281-1.75-0.406-1.063-0.094-2.219-0.141t-2.281-0.016h-1.844zM27.438 16.281q0 1.438-0.016 2.844t-0.078 2.813q-0.094 1.656-0.547 3.109t-1.672 2.641q-1.219 1.219-2.656 1.688t-3.094 0.531q-1.406 0.094-2.828 0.094h-5.672t-2.813-0.094q-1.656-0.063-3.109-0.531t-2.641-1.688q-1.219-1.188-1.688-2.641t-0.531-3.109q-0.094-1.406-0.094-2.813v-5.672t0.094-2.828q0.063-1.656 0.531-3.094t1.688-2.656q1.188-1.219 2.641-1.672t3.109-0.547q1.406-0.063 2.813-0.078t2.844-0.016q1.406 0 2.828 0.016t2.828 0.078q1.656 0.094 3.094 0.547t2.656 1.672 1.672 2.656 0.547 3.094q0.063 1.406 0.078 2.828t0.016 2.828z"></path>
                                                </svg>
                                            </i>
                                            <span>Instagram</span>
                                        </a>
                                    </li>

                                    <li className={classes.socialLinks}>
                                        <a href="https://www.linkedin.com/company/ace-mart-restaurant-supply/" target="_blank">
                                            <i className={classes.iconWrapper}>
                                                <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="27" height="14" viewBox="0 0 27 32">
                                                    <title>linkedin</title>
                                                    <path d="M6.219 11.438v17.719h-5.875v-17.719h5.875zM6.594 5.969q0.031 1.281-0.875 2.172t-2.438 0.891v0h-0.031q-1.5 0-2.375-0.891t-0.875-2.172 0.906-2.156 2.406-0.875q1.531 0 2.406 0.875t0.875 2.156zM27.438 19v10.156h-5.875v-9.469q0-1.781-0.703-2.891t-2.297-1.109q-1.219 0-1.953 0.672t-1.047 1.453q-0.125 0.313-0.172 0.688t-0.047 0.781v9.875h-5.875q0.031-6.031 0.031-9.531v-7.656l-0.031-0.531h5.875v2.594h-0.031q0.594-0.938 1.781-1.969t3.563-1.031q1.469 0 2.688 0.5 1.25 0.469 2.156 1.453t1.406 2.484q0.531 1.5 0.531 3.531v0z"></path>
                                                </svg>
                                            </i>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className={classes.blockRight}>
                            <div className={classes.blockNewsletter}>
                                <h3 className={classes.groupTitle}>Subscribe</h3>
                            </div>
                            <div className={classes.newsletterContentWrapper}>
                                <NewsletterSubscriptionInput />
                            </div>
                            <div className={classes.blockPaymentAccepted}>
                                <Image
                                    src={footerPayment} />
                            </div>
                            <div className={classes.blockCustomerId}>
                                <span>Customer WebID:</span> 185 273 042
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={[classes.footerSectionWrapper, classes.sectionLower].join(" ")}>
                <div className={[classes.footerContainer, classes.containerLow].join(" ")}>
                    <div className={[classes.contentBlock, classes.blockLower].join(" ")}>
                        <p className={classes.copyright}>© 2021 Ace Mart Restaurant Supply</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
