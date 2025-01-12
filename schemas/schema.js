// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import homePage from './documents/registry/homePage';
import homePageWeb from './documents/www/homePageWeb';
import createCreditClassPage from './documents/registry/createCreditClassPage';
import createMethodologyPage from './documents/registry/createMethodologyPage';
import developersPage from './documents/www/developersPage';
import methodologyReviewProcessPage from './documents/registry/methodologyReviewProcessPage';
import methodology from './documents/registry/methodology';
import creditClass from './documents/registry/creditClass';
import landStewardsPage from './documents/registry/landStewardsPage';
import buyersPage from './documents/registry/buyersPage';
import mainnetPage from './documents/www/mainnetPage';
import projectsPage from './documents/registry/projectsPage';
import projectPage from './documents/registry/projectPage';
import bridgePage from './documents/registry/bridgePage';
import basketDetailsPage from './documents/registry/basketDetailsPage';

import resource from './documents/shared/resource';
import faq from './documents/shared/faq';
import document from './documents/shared/document';
import ecologicalImpact from './documents/shared/ecologicalImpact';
import media from './documents/shared/media';
import sdg from './documents/shared/sdg';
import ecologicalOutcome from './documents/shared/ecologicalOutcome';
import landManagementPractice from './documents/shared/landManagementPractice';
import tag from './documents/shared/tag';
import featuredSection from './documents/shared/featuredSection';
import gettingStartedResourcesSection from './documents/shared/gettingStartedResourcesSection';
import gettingStartedResourcesCard from './documents/shared/gettingStartedResourcesCard';

// Object types
import heroSection from './objects/sections/heroSection';
import stepCardSection from './objects/sections/stepCardSection';
import basicStepCardSection from './objects/sections/basicStepCardSection';
import fullStepCardSection from './objects/sections/fullStepCardSection';
import createMethodologyStepCardSection from './objects/sections/createMethodologyStepCardSection';
import creditTypeSection from './objects/sections/creditTypeSection';
import reviewSection from './objects/sections/reviewSection';
import connectSection from './objects/sections/connectSection';
import imageItemsSection from './objects/sections/imageItemsSection';
import dualImageSection from './objects/sections/dualImageSection';
import practicesOutcomesSection from './objects/sections/practicesOutcomesSection';
import timelineSection from './objects/sections/timelineSection';
import imageGridSection from './objects/sections/imageGridSection';

import stepCard from './objects/stepCard';
import bottomBanner from './objects/bottomBanner';
import card from './objects/card';
import pageMetadata from './objects/pageMetadata';
import customPortableText from './objects/customPortableText';
import button from './objects/button';
import customImage from './objects/customImage';
import link from './objects/link';
import ecologicalImpactRelation from './objects/ecologicalImpactRelation';
import documentation from './objects/documentation';
import buyer from './objects/buyer';
import landSteward from './objects/landSteward';
import connectSectionLink from './objects/connectSectionLink';
import imageBoldTextLabel from './objects/templates/imageBoldTextLabel';
import imageGridItem from './objects/imageGridItem';
import timelineItem from './objects/timelineItem';
import titleBody from './objects/templates/titleBody';
import bodyGreenTextWithPopover from './objects/bodyGreenTextWithPopover';
import marketplaceSection from './objects/sections/homePageWeb/marketplaceSection';
import callToAction from './objects/callToAction';
import climateSection from './objects/sections/homePageWeb/climateSection';
import carbonPlusSection from './objects/sections/homePageWeb/carbonPlusSection';
import homeValuesSection from './objects/sections/homePageWeb/homeValuesSection';
import valuesImageItem from './objects/sections/homePageWeb/valuesImageItem';
import devApproachSection from './objects/sections/developerPage/devApproachSection';
import devLedgerSection from './objects/sections/developerPage/devLedgerSection';
import devOpenAgSection from './objects/sections/developerPage/devOpenAgSection';
import devCareersSection from './objects/sections/developerPage/devCareersSection';
import devTestnetSection from './objects/sections/developerPage/devTestnetSection';
import homeFoldSection from './objects/sections/homePageWeb/homeFoldSection';
import titleCustomBody from './objects/templates/titleCustomBody';
import sharedSections from './documents/www/sharedSections';
import mainnetLaunchInfoSection from './objects/sections/mainnetPage/mainnetLaunchInfoSection';
import mainnetActionItem from './objects/sections/mainnetActionItem';
import mainnetWhatsNextSection from './objects/sections/mainnetPage/mainnetWhatsNextSection';
import mainnetInfoItem from './objects/sections/mainnetInfoItem';
import blogSection from './objects/sections/blogSection';
import blogPost from './objects/blogPost';
import caseStudiesPage from './documents/www/caseStudiesPage';
import caseStudyAboutSection from './objects/sections/caseStudyPage/caseStudyAboutSection';
import caseStudyApproachSection from './objects/sections/caseStudyPage/caseStudyApproachSection';
import caseStudyBottomSection from './objects/sections/caseStudyPage/caseStudyBottomSection';
import caseStudyConclusionSection from './objects/sections/caseStudyPage/caseStudyConclusionSection';
import caseStudyContextSection from './objects/sections/caseStudyPage/caseStudyContextSection';
import caseStudyFigureSection from './objects/sections/caseStudyPage/caseStudyFigureSection';
import caseStudyFundingSection from './objects/sections/caseStudyPage/caseStudyFundingSection';
import caseStudyFigure from './objects/sections/caseStudyFigure';
import caseStudyPage from './documents/www/caseStudyPage';
import caseStudiesListSection from './objects/sections/caseStudiesPage/caseStudiesListSection';
import caseStudiesAboutSection from './objects/sections/caseStudiesPage/caseStudiesAboutSection';
import caseStudiesContextSection from './objects/sections/caseStudiesPage/caseStudiesContextSection';
import caseStudiesApproachSection from './objects/sections/caseStudiesPage/caseStudiesApproachSection';
import caseStudiesFundingSection from './objects/sections/caseStudiesPage/caseStudiesFundingSection';
import imageWithTitle from './objects/imageWithTitle';
import communityPage from './documents/www/communityPage';
import communityConnectSection from './objects/sections/communityPage/communityConnectSection';
import communityGoToSection from './objects/sections/communityPage/communityGoToSection';
import communityCollectiveSection from './objects/sections/communityPage/communityCollectiveSection';
import communityCollaborateSection from './objects/sections/communityPage/communityCollaborateSection';
import resourcesCard from './objects/resourcesCard';
import contactPage from './documents/www/contactPage';
import requestType from './objects/requestType';
import titleImageCustomBody from './objects/templates/titleImageCustomBody';
import titleImage from './objects/templates/titleImage';
import faqPage from './documents/www/faqPage';
import faqCategory from './objects/faqCategory';
import fundPage from './documents/www/fundPage';
import fundCallToAction from './objects/fundCallToAction';
import partnersPage from './documents/www/partnersPage';
import partnerLogo from './objects/partnerLogo';
import presskitPage from './documents/www/presskitPage';
import presskitFeaturedSection from './objects/sections/presskit/presskitFeaturedSection';
import presskitAwardsSection from './objects/sections/presskit/presskitAwardsSection';
import titleImageLink from './objects/templates/titleImageLink';
import presskitTimelineItem from './objects/presskitTimelineItem';
import presskitTimelineSection from './objects/sections/presskit/presskitTimelineSection';
import presskitTeamSection from './objects/sections/presskit/presskitTeamSection';
import nameTitleImage from './objects/templates/nameTitleImage';
import presskitLogosSection from './objects/sections/presskit/presskitLogosSection';
import presskitPhotosSection from './objects/sections/presskit/presskitPhotosSection';
import regenTeamMember from './objects/sections/regenTeamMember';
import resourcesPage from './documents/www/resourcesPage';
import resourcesRegistrySection from './objects/sections/resourcesPage/resourcesRegistrySection';
import resourcesRegistrySubSection from './objects/sections/resourcesPage/resourcesRegistrySubSection';
import resourcesLedgerSection from './objects/sections/resourcesPage/resourcesLedgerSection';
import sciencePage from './documents/www/sciencePage';
import scienceOpenScienceSection from './objects/sections/sciencePage/scienceOpenScienceSection';
import imageCustomBody from './objects/templates/imageCustomBody';
import sciencePartnershipSection from './objects/sections/sciencePage/sciencePartnershipSection';
import scienceCommunitySection from './objects/sections/sciencePage/scienceCommunitySection';
import scienceCommunityMember from './objects/sections/sciencePage/scienceCommunityMember';
import titleImageBody from './objects/templates/titleImageBody';
import scienceTitleDescriptionSection from './objects/sections/sciencePage/scienceTitleDescriptionSection';
import teamPage from './documents/www/teamPage';
import teamSection from './objects/sections/teamPage/teamSection';
import tokenPage from './documents/www/tokenPage';
import tokenInfoSection from './objects/sections/tokenPage/tokenInfoSection';
import tokenPoolSection from './objects/sections/tokenPage/tokenPoolSection';
import teamStakingSection from './objects/sections/tokenPage/teamStakingSection';
import tokenNewsletterSection from './objects/sections/tokenPage/tokenNewsletterSection';
import titleBodyButton from './objects/templates/titleBodyButton';
import imageLink from './objects/templates/imageLink';
import validatorsPage from './documents/www/validatorsPage';
import validator from './objects/sections/validatorsPage/validator';
import validatorWhoSection from './objects/sections/validatorsPage/validatorWhoSection';
import walletAddressRegistrationPage from './documents/www/walletAddressRegistrationPage';
import walletAddressRegistrationWalletSection from './objects/sections/walletAddressRegistrationPage/walletAddressRegistrationWalletSection';
import walletAddressRegistrationFormSection from './objects/sections/walletAddressRegistrationPage/walletAddressRegistrationFormSection';
import nctPage from './documents/www/nctPage';
import seo from './objects/seo';
import nctOverviewSection from './objects/sections/nctPage/nctOverviewSection';
import labeledTextLinkable from './objects/templates/labeledTextLinkable';
import nctTokenSection from './objects/sections/nctPage/nctTokenSection';
import nctLedgerSection from './objects/sections/nctPage/nctLedgerSection';
import homePageTopSection from './objects/sections/homePage/homePageTopSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    basicStepCardSection,
    basketDetailsPage,
    blogPost,
    blogSection,
    bodyGreenTextWithPopover,
    bottomBanner,
    bridgePage,
    button,
    buyer,
    buyersPage,
    callToAction,
    carbonPlusSection,
    card,
    caseStudiesAboutSection,
    caseStudiesApproachSection,
    caseStudiesContextSection,
    caseStudiesFundingSection,
    caseStudiesListSection,
    caseStudiesPage,
    caseStudyAboutSection,
    caseStudyApproachSection,
    caseStudyBottomSection,
    caseStudyConclusionSection,
    caseStudyContextSection,
    caseStudyFigure,
    caseStudyFigureSection,
    caseStudyFundingSection,
    caseStudyPage,
    climateSection,
    communityCollaborateSection,
    communityCollectiveSection,
    communityConnectSection,
    communityGoToSection,
    communityPage,
    connectSection,
    connectSectionLink,
    contactPage,
    createCreditClassPage,
    createMethodologyPage,
    createMethodologyStepCardSection,
    creditClass,
    creditTypeSection,
    customImage,
    customPortableText,
    devApproachSection,
    devCareersSection,
    developersPage,
    devLedgerSection,
    devOpenAgSection,
    devTestnetSection,
    document,
    documentation,
    dualImageSection,
    ecologicalImpact,
    ecologicalImpactRelation,
    ecologicalOutcome,
    faq,
    faqCategory,
    faqPage,
    featuredSection,
    fullStepCardSection,
    fundCallToAction,
    fundPage,
    gettingStartedResourcesCard,
    gettingStartedResourcesSection,
    heroSection,
    homeFoldSection,
    homePage,
    homePageTopSection,
    homePageWeb,
    homeValuesSection,
    imageBoldTextLabel,
    imageCustomBody,
    imageGridItem,
    imageGridSection,
    imageItemsSection,
    imageLink,
    imageWithTitle,
    labeledTextLinkable,
    landManagementPractice,
    landSteward,
    landStewardsPage,
    link,
    mainnetActionItem,
    mainnetInfoItem,
    mainnetLaunchInfoSection,
    mainnetPage,
    mainnetWhatsNextSection,
    marketplaceSection,
    media,
    methodology,
    methodologyReviewProcessPage,
    nameTitleImage,
    nctLedgerSection,
    nctOverviewSection,
    nctPage,
    nctTokenSection,
    pageMetadata,
    partnerLogo,
    partnersPage,
    practicesOutcomesSection,
    presskitAwardsSection,
    presskitFeaturedSection,
    presskitLogosSection,
    presskitPage,
    presskitPhotosSection,
    presskitTeamSection,
    presskitTimelineItem,
    presskitTimelineSection,
    projectPage,
    projectsPage,
    regenTeamMember,
    requestType,
    resource,
    resourcesCard,
    resourcesLedgerSection,
    resourcesPage,
    resourcesRegistrySection,
    resourcesRegistrySubSection,
    reviewSection,
    scienceCommunityMember,
    scienceCommunitySection,
    scienceOpenScienceSection,
    sciencePage,
    sciencePartnershipSection,
    scienceTitleDescriptionSection,
    sdg,
    seo,
    sharedSections,
    stepCard,
    stepCardSection,
    tag,
    teamPage,
    teamSection,
    teamStakingSection,
    timelineItem,
    timelineSection,
    titleBody,
    titleBodyButton,
    titleCustomBody,
    titleImage,
    titleImageBody,
    titleImageCustomBody,
    titleImageLink,
    tokenInfoSection,
    tokenNewsletterSection,
    tokenPage,
    tokenPoolSection,
    validator,
    validatorsPage,
    validatorWhoSection,
    valuesImageItem,
    walletAddressRegistrationFormSection,
    walletAddressRegistrationPage,
    walletAddressRegistrationWalletSection,
  ]),
});
