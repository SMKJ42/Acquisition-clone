import { useRouter } from "next/router";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { PublicLayout } from "~/components/layout/PublicLayout";

const policy = [
  `1. Introduction
This Privacy Policy describes the information and data collection, storage, and use practices and
policies of Acquisition LLC (“Acquisition LLC,” “Acquisition LLC,” “we,” “our,”
“us”) on the website at acquisition.com (along with all subdomains, collectively, the “Website”).
This Privacy Policy is only applicable to the Website and not to any other websites that you may
be able to access from the Website, each of which may have data collection, storage, and use
practices and policies that differ materially from this Privacy Policy. When you leave the
Website via a link to another website, you are subject to that site’s Privacy Policy, Terms of Use,
and other policies (“Third Party website policies”) applicable to that site and you should review
the Third Party website policies.`,

  `2. Information Collection and Use Practices
i. Types of Information Collected
Acquisition LLC may collect two different types of information, Personally Identifiable Information
(“PII”) and Non-Personally Identifiable Information (“Non-PII”). PII and Non-PII may be
collected anytime you access or use a Acquisition LLC website, including this Website. PII and
Non-PII may also be collected by Acquisition LLC during in-person discussions, telephone
conversations, and electronic or other written communications.`,

  `Personally Identifiable Information Collected : In order for you to access and use the services
offered through the Websites, we may require you to provide information that identifies you as
an individual ( i.e. , “PII”). PII may include the following categories of information: (1) Contact
Data (such as your name, mailing address, email address, and phone number(s)); (2) Financial
Data (such as your account or credit card number); and (3) Demographic Data (such as your zip
code and age). If you communicate with us by email, post messages to any of our chat groups,
bulletin boards, or forums, or otherwise complete online forms or surveys, any information
provided may be collected as PII.`,

  `Non-Personally Identifiable Information Collected : We may automatically track and collect the
following categories of information when you visit our Website: (1) IP addresses; (2) domain
servers; (3) types of computers accessing the Website; and (4) types of web browsers used to
access the Website (collectively “Non-PII”). Non-PII is anonymous information that does not
personally identify you but is helpful for improving your experience on the Website.`,

  `ii. Uses of Information Collected
Acquisition LLC uses PII to respond to your inquiries, provide you with services you have
requested, keep you informed of services and products Acquisition LLC thinks may be of interest to
you, and otherwise personalize your experience with Acquisition LLC, among other reasons. Acquisition does not sell or lease PII about you to others.
iii. Technology We May Use: Cookies, Web Beacons, and Clear Gifs
Cookies and web beacons are small text files that are stored on your computer when you visit
certain web pages. Acquisition LLC collects information through cookies and web beacons about
your web browsing activities such as the address of the page you are visiting, the address of the
referrer page you previously visited, the time you are viewing the page, your browsing
environment, and your display settings. We may use cookies and web beacons on our Website
for the following purposes:
Understanding traffic patterns and the number of visitors to the Website and otherwebsites that we partner with;
Understanding how you use and interact with the Website;
Improving Acquisition LLC’s services and products;
Optimizing your experience on the Website;
Providing anonymous individual or aggregate auditing, research, modeling, and reporting for our advertisers and other partners;
Storing your password so you do not have to re-enter it each time you visit the Website;
Providing you with relevant advertising and content; and
Managing our Website.
Clear Gifs are tiny graphics with a unique identifier, similar in function to cookies, used to track
the online movements of Website visitors.
Please note that cookies, web beacons and clear gifs may be placed by a third party service
provider who performs these functions for us. These third parties may have their own privacy
policies.
Acquisition LLC does not use cookies, web beacons, or clear gifs to collect or store any PII.`,

  `iv. Sharing of Personal Information
Acquisition LLC may share PII with Acquisition LLC affiliates, advertisers, and third parties contracting
with Acquisition LLC to provide services to you. The other parties with whom we share PII may
send information to you about other products or services. We do not share your Financial Data
with these third parties. We may share Financial Data with business partners who assist us by
performing core services (such as hosting, billing, fulfillment, or data storage and security)
related to our operation of the Website and provision of services. Those business partners agree
to uphold the same standards of security and confidentiality described in this Privacy Policy, and
they will only use your Financial Data to carry out their specific business obligations to Acquisition LLC.
If you do not want us to share your PII with any third parties, please email us at
itsystems@acquisition.com .`,

  `If we or some or all of our assets are acquired by another company, including through a sale in
connection with a bankruptcy, that company will possess the information collected by us, and it
will assume the rights and obligations regarding your PII as described in this Privacy Policy.
We may disclose PII or other data to comply with the law or legal requirements, enforce or apply
our Terms of Use and other agreements, or protect our rights, property, the safety of our users, or
others.`,

  `Because Non-PII does not personally identify You, Acquisition LLC reserves the right to use and
disclose to third parties Non-PII for any purpose.`,

  `v. Interest-Based Ads
We may also may share Non-PII with advertisers and other third parties who may use it for
advertising purposes, including to serve targeted advertising on non-affiliated third party sites.
Some of those ads may be personalized, meaning that they are intended to be relevant to you
based on information about your online activities on the Website or other websites over time.
For example, anonymous information collected across multiple sites may enable the ad network
to predict your preferences and show you ads that are likely to be of interest to you. Please note
that we do not share any information that identifies you personally with the third party service
providers who serve ads on our behalf. To opt out of these types of ads, please visit the Network
Advertising Initiative (“NAI”) for information about how to opt-out of interest-based advertising
by their members. See http://www.networkadvertising.org for general information about the NAI
and http://www.networkadvertising.org/managing/opt_out.asp for the opt-out page. You may
also visit http://www.aboutads.info/consumers/ to learn about interest-based advertising and how
to opt-out from online behavioral ads served by some or all participating companies.`,

  `vi. Email Marketing
By submitting your email address through the Website, you are expressly consenting to receive
emails from Acquisition LLC, including from Acquisition LLC’s affiliates, and from third parties
concerning offers and advertisements unrelated to Acquisition LLC. To opt-out of receiving email
messages from us, from our affiliates or from other third parties, click on the “Unsubscribe” link
contained in each email. Please allow up to 10 business days for us to process your request.
Please note that if you decide not to receive marketing emails from us, you may still receive
transactional email messages regarding your account. If you have questions or concerns
regarding this provision, please contact us at itsystems@acquisition.com .`,

  `3. Confidentiality and Security of Personal Information
i. User Ability to Access, Update, and Correct PII
At any time you may contact Acquisition LLC via email at itsystems@acquisition.com to
update your PII or request that your PII no longer be shared by Acquisition LLC. In the case that
your user name or password is lost, stolen, or used without permission, promptly contact Acquisition LLC at support@acquisition.com to update the PII we have on file for you.`,

  `ii. Your California Privacy Rights
As described in this Privacy Policy, from time to time we may make your personal information
available to third parties for their marketing purposes. California law permits individuals who
are California residents to request certain information about our disclosure of personal
information to third parties for direct marketing purposes. If you are a California resident and
would like to make such a request, please submit your request in writing to
itsystems@acquisition.com . If you do not want us to share your personal information
with third parties, you may opt-out of this information sharing by emailing us at
itsystems@acquisition.com . In accordance with California Civil Code Sec. 1789.3,
California resident users are entitled to know that they may file grievances and complaints with
the California Department of Consumer Affairs, 1625 North Market Blvd., Suite N112,
Sacramento, CA 95834; or by phone at 916-445-1254 or 800-952-5210; or by email to
dca@dca.ca.gov.`,

  `iii. Security
Acquisition LLC maintains reasonable physical, administrative and technical safeguards to protect
PII from loss, misuse, or unauthorized access, disclosure, alteration or destruction. However, no
system is 100% secure. Acquisition LLC enforces its Privacy Policy via self-assessment.
4. Third-Party Links and Public Information
Except where expressly stated by Acquisition LLC, Acquisition LLC is not affiliated or associated with
operators of any third party websites that link to or are linked from any Acquisition LLC-maintained
website, including this Website. Please review the Third Party website policies of each site you
visit.`,

  `Acquisition LLC disclaims any responsibility for the accuracy or content of information found on
third party websites that link to or are linked from any Acquisition LLC website, including this
Website. Acquisition LLC disclaims any responsibility for the security of any information (including
without limitation PII and Financial Data) that you may provide to any third party. We may also
may make chat rooms, forums, message boards, and news groups available to you. Please
understand that any information that is disclosed in these areas becomes accessible to the public.
You should exercise caution when deciding to disclose your PII in a public forum.`,

  `5. Updates and Changes to Privacy Policy
We reserve the right, at any time and without notice, to update or modify this Privacy Policy,
simply by posting such update or modification on the Website. Any such change, update, or
modification will be effective immediately upon posting on the Website. You consent to such
changes through your continued use of the Website.
If you have questions about this Privacy Policy or want to contact us, please send an email to
itsystems@acquisition.com or write to us at:`,

  `Acquisition, LLC
c/o Paracorp Incorporated
3610-2 N. Josey Lane #223
Carrollton, TX 75007
Copyright 2022 – Acquisition LLC – All Rights Reserved`,
];

const privacy_policy: NextPageWithLayout = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-2/3 max-w-[500px]">
        {policy.map((paragraph, index) => (
          <p key={index} className="my-8 font-light">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

privacy_policy.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default privacy_policy;
