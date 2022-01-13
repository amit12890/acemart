import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import GET_BLOG_CONFIG_QUERY from '../queries/getBlogConfig.graphql';

export const useBlogConfig = () => {
    const [storeLocale, setStoreLocale] = useState(null);
    const [design, setDesign] = useState(null);
    const [blogIndexPage, setBlogIndexPage] = useState(null);
    const [postView, setPostView] = useState(null);
    const [pageSize, setPageSize] = useState(null);
    const [sidebar, setSidebar] = useState(null);
    const [productPage, setProductPage] = useState(null);
    const [authorConfig, setAuthorConfig] = useState(null);
    const [tagConfigRobots, setTagConfigRobots] = useState(null);
    const [searchConfigRobots, setSearchConfigRobots] = useState(null);
    const [advancedPermalink, setAdvancedPermalink] = useState(null);
    const [permalink, setPermalink] = useState(null);
    const [canonical, setCanonical] = useState(null);
    const [topMenu, setTopMenu] = useState(null);

    const { data, error, loading } = useQuery(GET_BLOG_CONFIG_QUERY, {
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (data) {
            const { storeConfig } = data;
            const {
                locale,
                mfblog_design_publication_date,
                mfblog_design_format_date,
                mfblog_index_page_title,
                mfblog_index_page_posts_sort_by,
                mfblog_index_page_meta_title,
                mfblog_index_page_meta_keywords,
                mfblog_index_page_meta_description,
                mfblog_post_view_related_posts_enabled,
                mfblog_post_view_related_posts_number_of_posts,
                mfblog_post_view_related_products_enabled,
                mfblog_post_view_related_products_number_of_products,
                mfblog_post_view_comments_type,
                mfblog_post_view_comments_number_of_comments,
                mfblog_post_view_comments_number_of_replies,
                mfblog_post_view_comments_fb_app_id,
                mfblog_post_view_comments_fb_app_id_header,
                mfblog_post_view_comments_disqus_forum_shortname,
                mfblog_post_view_comments_guest_comments,
                mfblog_post_view_comments_display_privacy_policy_checkbox,
                mfblog_post_view_comments_default_status,
                mfblog_post_view_comments_format_date,
                mfblog_post_view_nextprev_enabled,
                mfblog_post_list_posts_per_page,
                mfblog_sidebar_search_enabled,
                mfblog_sidebar_search_sort_order,
                mfblog_sidebar_categories_enabled,
                mfblog_sidebar_categories_show_posts_count,
                mfblog_sidebar_categories_max_depth,
                mfblog_sidebar_categories_sort_order,
                mfblog_sidebar_recent_posts_enabled,
                mfblog_sidebar_recent_posts_posts_per_page,
                mfblog_sidebar_recent_posts_sort_ordere,
                mfblog_sidebar_featured_posts_enabled,
                mfblog_sidebar_featured_posts_posts_ids,
                mfblog_sidebar_featured_posts_sort_order,
                mfblog_sidebar_popular_posts_enabled,
                mfblog_sidebar_popular_posts_posts_per_page,
                mfblog_sidebar_popular_posts_sort_order,
                mfblog_sidebar_archive_enabled,
                mfblog_sidebar_archive_format_date,
                mfblog_sidebar_archive_sort_order,
                mfblog_sidebar_tag_claud_enabled,
                mfblog_sidebar_tag_claud_tag_count,
                mfblog_sidebar_tag_claud_sort_order,
                mfblog_sidebar_custom_enabled,
                mfblog_sidebar_custom_sort_order,
                mfblog_sidebar_custom_html,
                mfblog_sidebar_custom2_enabled,
                mfblog_sidebar_custom2_sort_order,
                mfblog_sidebar_custom2_html,
                mfblog_sidebar_rss_feed_enabled,
                mfblog_sidebar_rss_feed_sort_order,
                mfblog_sidebar_rss_feed_title,
                mfblog_sidebar_rss_feed_description,
                mfblog_product_page_related_posts_enabled,
                mfblog_product_page_number_of_related_posts,
                mfblog_author_enabled,
                mfblog_author_page_enabled,
                mfblog_author_robots,
                mfblog_tag_robots,
                mfblog_search_robots,
                mfblog_advanced_permalink_enabled,
                mfblog_advanced_permalink_redirect_to_no_slash,
                mfblog_advanced_permalink_blog_route,
                mfblog_advanced_permalink_archive_path_schema,
                mfblog_advanced_permalink_search_path_schema,
                mfblog_permalink_route,
                mfblog_permalink_redirect_to_no_slash,
                mfblog_permalink_type,
                mfblog_permalink_post_route,
                mfblog_permalink_post_sufix,
                mfblog_permalink_post_use_categories,
                mfblog_permalink_category_route,
                mfblog_permalink_category_sufix,
                mfblog_permalink_category_use_categories,
                mfblog_permalink_archive_route,
                mfblog_permalink_tag_route,
                mfblog_permalink_tag_sufix,
                mfblog_permalink_author_route,
                mfblog_permalink_author_sufix,
                mfblog_permalink_search_route,
                mfblog_seo_use_canonical_meta_tag_for,
                mfblog_top_menu_show_item,
                mfblog_top_menu_item_text,
                mfblog_top_menu_include_categories,
                mfblog_top_menu_max_depth
            } = storeConfig;

            setStoreLocale(locale);

            setDesign({
                publicationDateIsEnabled: mfblog_design_publication_date,
                formatDate: mfblog_design_format_date
            });

            setBlogIndexPage({
                title: mfblog_index_page_title,
                sortBy: mfblog_index_page_posts_sort_by,
                metaTitle: mfblog_index_page_meta_title,
                metaKeywords: mfblog_index_page_meta_keywords,
                metaDescription: mfblog_index_page_meta_description
            });

            setPostView({
                relatedPosts: {
                    relatedPostsIsEnabled: mfblog_post_view_related_posts_enabled,
                    numberOfPosts: mfblog_post_view_related_posts_number_of_posts
                },
                relatedProducts: {
                    relatedProductsIsEnabled: mfblog_post_view_related_products_enabled,
                    numberOfProducts: mfblog_post_view_related_products_number_of_products
                },
                comments: {
                    type: mfblog_post_view_comments_type,
                    numberOfComments: mfblog_post_view_comments_number_of_comments,
                    numberOfReplies: mfblog_post_view_comments_number_of_replies,
                    fbAppId: mfblog_post_view_comments_fb_app_id,
                    fbAppIdHeader: mfblog_post_view_comments_fb_app_id_header,
                    disqusSiteShortname: mfblog_post_view_comments_disqus_forum_shortname,
                    guestComments: mfblog_post_view_comments_guest_comments,
                    privacyPolicy: mfblog_post_view_comments_display_privacy_policy_checkbox,
                    defaultStatus: mfblog_post_view_comments_default_status,
                    formatDate: mfblog_post_view_comments_format_date
                },
                nextPrevIsEnabled: mfblog_post_view_nextprev_enabled
            });

            setPageSize(mfblog_post_list_posts_per_page);

            setSidebar({
                search: {
                    searchIsEnabled: mfblog_sidebar_search_enabled,
                    searchSortOrder: mfblog_sidebar_search_sort_order
                },
                categories: {
                    categoriesIsEnabled: mfblog_sidebar_categories_enabled,
                    showPostsCount: mfblog_sidebar_categories_show_posts_count,
                    categoriesMaxDepth: mfblog_sidebar_categories_max_depth,
                    categoriesSortOrder: mfblog_sidebar_categories_sort_order
                },
                recentPosts: {
                    recentPostsIsEnabled: mfblog_sidebar_recent_posts_enabled,
                    recentPostsPageSize: mfblog_sidebar_recent_posts_posts_per_page,
                    recentPostsSortOrder: mfblog_sidebar_recent_posts_sort_ordere

                },
                featuredPosts: {
                    featuredPostsIsEnabled: mfblog_sidebar_featured_posts_enabled,
                    postIds: mfblog_sidebar_featured_posts_posts_ids,
                    featuredPostsSortOrder: mfblog_sidebar_featured_posts_sort_order
                },
                popularPosts: {
                    popularPostsIsEnabled: mfblog_sidebar_popular_posts_enabled,
                    popularPostsPageSize: mfblog_sidebar_popular_posts_posts_per_page,
                    popularPostsSortOrder: mfblog_sidebar_popular_posts_sort_order
                },
                archive: {
                    archiveIsEnabled: mfblog_sidebar_archive_enabled,
                    formatDate: mfblog_sidebar_archive_format_date,
                    archiveSortOrder: mfblog_sidebar_archive_sort_order
                },
                tags: {
                    tagsIsEnabled: mfblog_sidebar_tag_claud_enabled,
                    tagsCount: mfblog_sidebar_tag_claud_tag_count,
                    tagsSortOrder: mfblog_sidebar_tag_claud_sort_order
                },
                custom: {
                    customIsEnabled: mfblog_sidebar_custom_enabled,
                    customSortOrder: mfblog_sidebar_custom_sort_order,
                    customHtml: mfblog_sidebar_custom_html
                },
                custom2: {
                    custom2IsEnabled: mfblog_sidebar_custom2_enabled,
                    custom2SortOrder: mfblog_sidebar_custom2_sort_order,
                    custom2Html: mfblog_sidebar_custom2_html
                },
                rssFeed: {
                    rssFeedIsEnabled: mfblog_sidebar_rss_feed_enabled,
                    rssFeedSortOrder: mfblog_sidebar_rss_feed_sort_order,
                    rssFeedTitle: mfblog_sidebar_rss_feed_title,
                    rssFeedDescription: mfblog_sidebar_rss_feed_description
                }
            });

            setProductPage({
                relatedPostsIsEnabled: mfblog_product_page_related_posts_enabled,
                numberOfRelatedPosts: mfblog_product_page_number_of_related_posts
            });

            setAuthorConfig({
                authorInfo: mfblog_author_enabled,
                displayAuthorPosts: mfblog_author_page_enabled,
                robots: mfblog_author_robots
            });

            setTagConfigRobots(mfblog_tag_robots);

            setSearchConfigRobots(mfblog_search_robots);

            setAdvancedPermalink({
                advancedPermalinkIsEnabled: mfblog_advanced_permalink_enabled,
                advancedPermalinkRedirectToNoSlash: mfblog_advanced_permalink_redirect_to_no_slash,
                advancedPermalinkBlogRoute: mfblog_advanced_permalink_blog_route,
                archivePathSchema: mfblog_advanced_permalink_archive_path_schema,
                searchPathSchema: mfblog_advanced_permalink_search_path_schema
            })

            setPermalink({
                route: mfblog_permalink_route,
                redirectToNoSlash: mfblog_permalink_redirect_to_no_slash,
                type: mfblog_permalink_type,
                postRoute: mfblog_permalink_post_route,
                postSuffix: mfblog_permalink_post_sufix,
                postUseCategories: mfblog_permalink_post_use_categories,
                categoryRoute: mfblog_permalink_category_route,
                categorySuffix: mfblog_permalink_category_sufix,
                categoryUseCategories: mfblog_permalink_category_use_categories,
                archiveRoute: mfblog_permalink_archive_route,
                tagRoute: mfblog_permalink_tag_route,
                tagSuffix: mfblog_permalink_tag_sufix,
                authorRoute: mfblog_permalink_author_route,
                authorSuffix: mfblog_permalink_author_sufix,
                searchRoute: mfblog_permalink_search_route
            });

            setCanonical(mfblog_seo_use_canonical_meta_tag_for);

            setTopMenu({
                showItem: mfblog_top_menu_show_item,
                itemText: mfblog_top_menu_item_text,
                includeCategories: mfblog_top_menu_include_categories,
                maxDepth: mfblog_top_menu_max_depth
            })
        }

        return () => {
            setStoreLocale(null);
            setDesign(null);
            setBlogIndexPage(null);
            setPostView(null);
            setPageSize(null);
            setSidebar(null);
            setProductPage(null);
            setAuthorConfig(null);
            setSearchConfigRobots(null);
            setTagConfigRobots(null);
            setAdvancedPermalink(null);
            setPermalink(null);
            setTopMenu(null);
        };
    }, [data])

    const isCanonical = (urlType) => {
        if (canonical && urlType) {
            if (canonical === 'all') {
                return true;
            } else {
                const arr = canonical.split(',').map(i => ('blog_' + i).toUpperCase());
                return arr.includes(urlType);
            }
        }
    }

    const getData = (obj, defaultObj) => {
        const isNotEmpty = Object.values(obj).some(x => (x !== null && x !== ''));

        if (isNotEmpty) {
            return obj
        } else {
            return defaultObj
        }
    }

    return {
        loading,
        error,
        storeLocale,
        design,
        blogIndexPage,
        postView,
        pageSize,
        sidebar,
        productPage,
        authorConfig,
        tagConfigRobots,
        searchConfigRobots,
        advancedPermalink,
        permalink,
        canonical,
        isCanonical,
        topMenu,
        getData
    }
}
