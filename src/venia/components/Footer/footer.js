import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import Logo from '@magento/venia-ui/lib/components/Logo';
import { useStyle } from '../../classify';
import Image from '../Image';
import testImg from '../../../assets/test.png';
import defaultClasses from './footer.css';
import { DEFAULT_LINKS, LOREM_IPSUM } from './sampleData';

const Footer = props => {
    const { links } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();

    const { copyrightText } = talonProps;

    const linkGroups = Array.from(links, ([groupKey, linkProps]) => {
        const linkElements = Array.from(linkProps, ([text, path]) => {
            const itemKey = `text: ${text} path:${path}`;
            const child = path ? (
                <Link className={classes.link} to={path}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </Link>
            ) : (
                <span className={classes.label}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </span>
            );

            return (
                <li key={itemKey} className={classes.linkItem}>
                    {child}
                </li>
            );
        });

        return (
            <ul key={groupKey} className={classes.linkGroup}>
                {linkElements}
            </ul>
        );
    });

    return (
        <footer className={classes.root}>
            <div className={[classes.footerSectionWrapper, classes.sectionTop].join(" ")}>
                <div className={[classes.footerContainer, classes.containerTop].join(" ")}>
                    <div className={[classes.contentBlock, classes.blockUpper].join(" ")}>
                    <div className={classes.companyService}>
                            <div className={classes.serviceItem}>
                                <div className={classes.itemIcon}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 32 32">
                                            <title>resources</title>
                                            <path d="M7 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM6 10h-4v-2h4v2zM17 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM16 10h-4v-2h4v2zM23.906 5.531l-5.344 2.719q-0.375 0.188-0.5 0.578t0.031 0.766l9 17.844q0.188 0.375 0.594 0.516t0.75-0.047l5.375-2.719q0.375-0.188 0.5-0.578t-0.063-0.766l-9-17.844q-0.188-0.375-0.578-0.5t-0.766 0.031v0z"></path>
                                        </svg>
                                    </i> 
                                </div>
                                <div className={classes.itemContent}>
                                    <h4 className={classes.itemTitle}>Fast Shipping</h4>
                                    <p className={classes.itemSubTitle}>On every order, every day!</p>
                                </div>
                            </div>

                            <div className={classes.serviceItem}>
                                <div className={classes.itemIcon}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 32 32">
                                            <title>resources</title>
                                            <path d="M7 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM6 10h-4v-2h4v2zM17 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM16 10h-4v-2h4v2zM23.906 5.531l-5.344 2.719q-0.375 0.188-0.5 0.578t0.031 0.766l9 17.844q0.188 0.375 0.594 0.516t0.75-0.047l5.375-2.719q0.375-0.188 0.5-0.578t-0.063-0.766l-9-17.844q-0.188-0.375-0.578-0.5t-0.766 0.031v0z"></path>
                                        </svg>
                                    </i> 
                                </div>
                                <div className={classes.itemContent}>
                                    <h4 className={classes.itemTitle}>Secure Payment</h4>
                                    <p className={classes.itemSubTitle}>We value your security</p>
                                </div>
                            </div>

                            <div className={classes.serviceItem}>
                                <div className={classes.itemIcon}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 32 32">
                                            <title>resources</title>
                                            <path d="M7 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM6 10h-4v-2h4v2zM17 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM16 10h-4v-2h4v2zM23.906 5.531l-5.344 2.719q-0.375 0.188-0.5 0.578t0.031 0.766l9 17.844q0.188 0.375 0.594 0.516t0.75-0.047l5.375-2.719q0.375-0.188 0.5-0.578t-0.063-0.766l-9-17.844q-0.188-0.375-0.578-0.5t-0.766 0.031v0z"></path>
                                        </svg>
                                    </i> 
                                </div>
                                <div className={classes.itemContent}>
                                    <h4 className={classes.itemTitle}>Financing Available</h4>
                                    <p className={classes.itemSubTitle}>Qualify today in only a few minutes!</p>
                                </div>
                            </div>

                            <div className={classes.serviceItem}>
                                <div className={classes.itemIcon}>
                                    <i className={classes.iconWrapper}>
                                        <svg className={[classes.svgIcon, classes.resources].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="" viewBox="0 0 32 32">
                                            <title>resources</title>
                                            <path d="M7 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM6 10h-4v-2h4v2zM17 4h-6q-0.406 0-0.703 0.297t-0.297 0.703v22q0 0.406 0.297 0.703t0.703 0.297h6q0.406 0 0.703-0.297t0.297-0.703v-22q0-0.406-0.297-0.703t-0.703-0.297zM16 10h-4v-2h4v2zM23.906 5.531l-5.344 2.719q-0.375 0.188-0.5 0.578t0.031 0.766l9 17.844q0.188 0.375 0.594 0.516t0.75-0.047l5.375-2.719q0.375-0.188 0.5-0.578t-0.063-0.766l-9-17.844q-0.188-0.375-0.578-0.5t-0.766 0.031v0z"></path>
                                        </svg>
                                    </i> 
                                </div>
                                <div className={classes.itemContent}>
                                    <h4 className={classes.itemTitle}>Excellent Customer Service</h4>
                                    <p className={classes.itemSubTitle}>Support number 1-888-898-8079</p>
                                    <Link
                                        to="/"
                                        className={classes.action}
                                    >termsText</Link>

                                    <Image src={testImg} /> 
                                </div>
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
                                    <h3 className={classes.groupTitle}>Customer Center</h3>
                                    <ul className={classes.groupLinks}>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}
                                            >My Account</Link>
                                        </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}
                                            >Customer Service</Link>
                                        </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                Help Center
                                            </Link>
                                            </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                Returns
                                            </Link>
                                        </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                Shipping Policies
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className={classes.footerBox}>
                                    <h3 className={classes.groupTitle}>Company Info</h3>
                                    <ul className={classes.groupLinks}>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                Careers
                                            </Link>                                            
                                        </li>
                                        <li className={classes.link}>
                                        <Link
                                                to="/"
                                                className={classes.action}>
                                                Careers
                                            </Link> 
                                        </li>
                                        <li className={classes.link}>
                                        <Link
                                                to="/"
                                                className={classes.action}>
                                                Terms of Use
                                            </Link> 
                                        </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                FAQs
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>

                                <div className={classes.footerBox}>
                                    <h3 className={classes.groupTitle}>Tools & Services</h3>
                                    <ul className={classes.groupLinks}>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                                Careers
                                            </Link>                                            
                                            <a href="#">Store Locator</a></li>
                                        <li className={classes.link}>
                                        <Link
                                                to="/"
                                                className={classes.action}>
                                                Resources
                                            </Link> 
                                        </li>
                                        <li className={classes.link}>
                                        <Link
                                                to="/"
                                                className={classes.action}>
                                                Financing
                                            </Link> 
                                        </li>
                                        <li className={classes.link}>
                                            <Link
                                                to="/"
                                                className={classes.action}>
                                               Commercial Kitchen Design
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>

                                <div className={classes.footerBox}>
                                    <h3 className={classes.groupTitle}>Contact Us</h3>
                                    <div className={classes.storeAddress}>
                                        <p>2653 Austin Hwy</p>
                                        <p>San Antonio, TX 78218</p>
                                        <p>888-898-8079</p>
                                    </div>
                                    <ul className={[classes.groupLinks, classes.groupSocial].join(" ")}>
                                        <li className={classes.socialLinks}>
                                            <a href="#">
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
                                            <a href="#">
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
                                            <a href="#">
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
                                            <a href="#">
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
                        <p className={classes.copyright}>{copyrightText || null}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
