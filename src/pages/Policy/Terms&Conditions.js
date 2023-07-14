import React, { useEffect } from 'react';
import Footer from '../../components/footer';
import styled from 'styled-components';
import { useLocation } from 'react-router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin: 0rem 3rem 2rem;
`

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0px;
`

const Content = styled.div`
    font-size: 14px;
    font-weight: normal;
`

function Terms() {

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    const data = [
        {
            title: 'Website Terms of Use',
            content: 'Please read the terms of use carefully before using or registering on the website or accessing any material, information or services through the website. your use of the website or the services provided by the website shall signify your acceptance of the terms of use and your agreement to be legally bound by the same.',
        },
        {
            title: 'Your use of the website implies that you agree with the terms of use.',
            content: '',
        },
        {
            title: 'General',
            content: 'Edge Car Care Accessories is an internet based portal, a company incorporated under the laws of India, with its registered office at 17th Main Rd, near Cafe Coffee Day, Sector 4, HSR Layout, Bengaluru, Karnataka 560102 .Use of the website is offered to you conditioned on acceptance of all the terms, conditions and notices contained in these terms, along with any amendments made by Edge Car Care Accessories at its sole discretion and posted on the website, including by way of imposing an additional charge for access to or use of a service.',
        },
        {
            title: '',
            content: `By (i) using this website or any facility or service provided by this website in any way; or (ii) merely browsing the website, you agree that you have read, understood and agreed to be bound by these terms of use and the website's privacy policy available at the homepage, www.Edge Car Care Accessories.com.`,
        },
        {
            title: 'Services',
            content: `The website is a platform that facilitates the online sale and purchase of branded and non-branded merchandise and services offered by Edge Car Care Accessories various affiliate/vendors/authorized brands at a discounted price ("services"). The services are offered to the users through various modes which shall include issue of coupons and vouchers that can be redeemed for various services.`,
        },
        {
            title: 'Eligibility to use',
            content: 'The services are not available to minors under the age of eighteen (18) or to any users suspended or removed from the Edge Car Care Accessories system by Edge Car Care Accessories for any reason whatsoever. If you do not conform to the above qualification, you shall not be permitted to avail of the services or use the website. You represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws as applicable in India. Notwithstanding the foregoing, if you are below the age of eighteen (18) years, you may avail the services provided by Edge Car Care Accessories through your legal guardian in accordance with the applicable laws.',
        },
        {
            title: 'User obligations',
            content: 'Subject to compliance with the terms of use, Edge Car Care Accessories grants you a non-exclusive, limited privilege to access and use this website and the services provided therein.',
        },
        {
            title: '',
            content: 'You agree to use the services, website and the materials provided therein only for purposes that are permitted by: (a) the terms of use; and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.',
        },
        {
            title: '',
            content: 'You agree to adhere to all limitations on dissemination, use and reproduction of any materials (such as the product catalogues) that you access on the website.',
        },
        {
            title: '',
            content: 'You agree to adhere to all limitations on dissemination, use and reproduction of any materials (such as the product catalogues) that you access on the website.',
        },
        {
            title: '',
            content: 'You agree not to access (or attempt to access) the website and the materials or services by any means other than through the interface that is provided by Edge Car Care Accessories. You shall not use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the website or content (as defined below), or in any way reproduce or circumvent the navigational structure or presentation of the website, materials or any content, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the website.',
        },
        {
            title: '',
            content: 'You acknowledge and agree that by accessing or using the website or services, you may be exposed to content from other users that you may consider offensive, indecent or otherwise objectionable. Edge Car Care Accessories disclaims all liabilities arising in relation to such offensive content on the website.',
        },
        {
            title: 'Use of materials',
            content: 'The rights granted to you in the product catalogues or any other materials as specified above are not applicable to the design, layout or look and feel of the website. Such elements of the website are protected by intellectual property rights and may not be copied or imitated in whole or in part.',
        },
        {
            title: '',
            content: 'Any purchase of the merchandise or services from the website will be strictly for personal use of the user. The user hereby expressly agrees that any merchandize or services purchased by the user will not be sold, resold, bartered or in any way used for any commercial purposes or for profit. The user hereby acknowledges that the services or merchandize purchased is not transferrable to any third party for profit.',
        },
        {
            title: 'Usage conduct',
            content: 'You are also under an obligation to use this website for reasonable and lawful purposes only, and shall not indulge in any activity that is not envisaged through the website.',
        },
        {
            title: '',
            content: 'You shall use this website, and any voucher/ coupons purchased through it, for personal, non-commercial use only and shall not re-sell the same to any other person.',
        },
        {
            title: '',
            content: 'Edge Car Care Accessories shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of you/cardholder having exceeded the preset limit mutually agreed by Edge Car Care Accessories with our acquiring bank from time to time',
        },
        {
            title: 'Intellectual property rights',
            content: 'The website and the processes, and their selection and arrangement, including but not limited to all text, graphics, user interfaces, visual interfaces, sounds and music (if any), artwork and computer code (collectively, the "content") on the website is owned and controlled by Edge Car Care Accessories and the design, structure, selection, coordination, expression, look and feel and arrangement of such content is protected by copyright, patent and trademark laws, and various other intellectual property rights.',
        },
        {
            title: '',
            content: 'The trademarks, logos and service marks displayed on the website ("marks") are the property of Edge Car Care Accessories. You are not permitted to use the marks without the prior consent of Edge Car Care Accessories.',
        },
        {
            title: '',
            content: 'Except as expressly provided herein, you acknowledge and agree that you shall not copy, republish, post, display, translate, transmit, reproduce or distribute any content through any medium without obtaining the necessary authorization from Edge Car Care Accessories.',
        },
        {
            title: 'Third party content',
            content: 'The website makes available general third party information such as, product catalogues, lists of authorized dealers, reports on news, entertainment, technology and features, advertisements including videos, images and photographs of the products and other data from external sources ("third party content"). Similar third party content would also be available to you on the email received by you from Edge Car Care Accessories. The provision of third party content is for general informational purposes only. You acknowledge that the third party content provided to you is obtained from sources believed to be reliable. Edge Car Care Accessories does not provide any guarantee with respect to any the third party content and Edge Car Care Accessories shall not be held liable for any loss suffered by you based on your reliance on or use of such data.',
        },
        {
            title: 'Disclaimer of warranties & liability',
            content: 'You expressly understand and agree that, to the maximum extent permitted by applicable law:',
        },
        {
            title: '',
            content: `The website, services and other materials are provided by Edge Car Care Accessories on an "as is" basis without warranty of any kind, express, implied, statutory or otherwise, including the implied warranties of title, non-infringement, merchantability or fitness for a particular purpose. Without limiting the foregoing, Edge Car Care Accessories makes no warranty that (i) the website or the services will meet your requirements or your use of the website or the services will be uninterrupted, timely, secure or error-free; (ii) the results that may be obtained from the use of the website, services or materials will be effective, accurate or reliable; (iii) the quality of the website, services or other materials will meet your expectations; or that (iv) any errors or defects in the website, services or other materials will be corrected. No advice or information, whether oral or written, obtained by you from Edge Car Care Accessories or through or from use of the services shall create any warranty not expressly stated in the terms of use.`,
        },
        {
            title: '',
            content: 'To the maximum extent permitted by applicable law, Edge Car Care Accessories will have no liability related to user content arising under intellectual property rights, libel, privacy, publicity, obscenity or other laws. Edge Car Care Accessories also disclaims all liability with respect to the misuse, loss, modification or unavailability of any user content.',
        },
        {
            title: '',
            content: `Edge Car Care Accessories will not be liable for any loss that you may incur as a consequence of unauthorized use of your account or account information in connection with the website or any services or materials, either with or without your knowledge. Edge Car Care Accessories has endeavored to ensure that all the information on the website is correct, but Edge Car Care Accessories neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data, information, product or service. Edge Car Care Accessories shall not be responsible for the delay or inability to use the website or related functionalities, the provision of or failure to provide functionalities, or for any information, software, products, functionalities and related graphics obtained through the website, or otherwise arising out of the use of the website, whether based on contract, tort, negligence, strict liability or otherwise. Further, Edge Car Care Accessories shall not be held responsible for non-availability of the website during periodic maintenance operations or any unplanned suspension of access to the website that may occur due to technical reasons or for any reason beyond Edge Car Care Accessories's control. The user understands and agrees that any material or data downloaded or otherwise obtained through the website is done entirely at their own discretion and risk and they will be solely responsible for any damage to their computer systems or loss of data that results from the download of such material or data. Edge Car Care Accessories is not responsible for any typographical error leading to an invalid coupon. Edge Car Care Accessories accepts no liability for any errors or omissions, with respect to any information provided to you whether on behalf of itself or third parties.`,
        },
        {
            title: '',
            content: 'Edge Car Care Accessories shall not be liable for any third party product or services. The advertisement available on e-mail or website with respect to the third party website or the products and services are for information purpose only.',
        },
        {
            title: `Disclaimers:`,
            content: <>Company is not responsible for any typographical error leading to an invalid coupon.
                <br />
                Company is neither recommending you to purchase the specific item which you intend to purchase or actually purchase using e-coupon nor company is warranting or endorsing any product or services listed on Edge Car Care Accessories nor warranting or verifying or guarantying the performance or conduct of any seller or of any third party.
                <br />
                Company shall not be liable for any lost or stolen e-coupon and e-coupons once issued shall not be reissued.
                <br />
                Company makes no representation or warranties of any kind regarding any product or service provided by any third party in connection with any e-coupon and shall not be responsible for any costs, damages, accident, delay, injury, loss, expense or inconvenience that may arise in connection with the use of e-coupons.
                <br />
                Limitation of liability: under no circumstances company's liability shall exceed giving the user a replacement e-coupon of the same nature and of the same value.
                <br />
                These terms and conditions are subject to Indian laws and any dispute shall be subject to jurisdiction of the courts in India only.</>,
        }
    ]
    return (
        <div style={{ backgroundColor: '#eeeeee', color: '#000000' }}>
            <Container>
                <h1>Terms to Use</h1>
                {
                    data.map((item) => (
                        <div>
                            <Title>{item.title}</Title>
                            <Content>{item.content}</Content>
                        </div>
                    ))
                }
            </Container>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Terms;