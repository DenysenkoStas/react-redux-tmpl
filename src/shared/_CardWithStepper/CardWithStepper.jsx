import React, {useState} from 'react';
import DefaultButton from '../_DefaultButton/DefaultButton';

import './CardWithStepper.scss';

import {ReactComponent as GearsIcon} from '../../../assets/images/gears.svg';
import {ReactComponent as DocWhiteIcon} from '../../../assets/images/doc-white.svg';
import {ReactComponent as SignedDocIcon} from '../../../assets/images/signed-doc.svg';
import {ReactComponent as Box2Icon} from '../../../assets/images/box-2.svg';
import {ReactComponent as BoxIcon} from '../../../assets/images/box.svg';
import {ReactComponent as CustomsIcon} from '../../../assets/images/customs.svg';
import {ReactComponent as DocumentIcon} from '../../../assets/images/document.svg';
import {ReactComponent as DeliveryIcon} from '../../../assets/images/delivery.svg';
import {ReactComponent as InvoiceIcon} from '../../../assets/images/invoice.svg';
import {ReactComponent as SuccessIcon} from '../../../assets/images/success.svg';

import moment from 'moment';
import LoaderMUI from '../LoaderMUI/LoaderMUI';

const CardWithStepper = ({
    status,
    name,
    product_data,
    key,
    fulfillment_center,
    already_delivered,
    offer,
    downloadFile,
    id,
    getData,
    investment = false
}) => {
    const [loading, setLoading] = useState(null);

    return (
        <div className='card-with-stepper' key={key}>
            {loading && <LoaderMUI linear />}
            <header
                className={`card-with-stepper__header px-30 pt-30 pb-15 ${
                    status === 1 ? 'card-with-stepper__header--alt-bg' : ''
                }`}
            >
                {name && <h2 className='card-with-stepper_title h3 mb-15'>{name}</h2>}
                {product_data && product_data.interest_rate && (
                    <p className='card-with-stepper__info mb-5 good'>
                        <span className='card-with-stepper__desc'>Interest rate</span>{' '}
                        {product_data && product_data.interest_rate}%
                    </p>
                )}

                {product_data && product_data.minimum_term && (
                    <p className='card-with-stepper__info'>
                        <span className='card-with-stepper__desc'>Minimum term</span>
                        {product_data &&
                            product_data.minimum_term &&
                            moment(product_data.minimum_term).format('MMMM DD, YYYY')}
                    </p>
                )}
            </header>

            {(status === 1 || status === 3) && (
                <div className='p-30 min-h-180'>
                    <div className='card-with-stepper__status'>
                        <div className='card-with-stepper__icon-wrap'>
                            <GearsIcon />
                        </div>
                        <span className='card-with-stepper__status-name'>
                            {status === 1 && 'Request in review'}
                            {status === 3 && 'Contract in review'}
                        </span>
                    </div>
                    <p className='card-with-stepper__msg'>
                        {status === 1 &&
                            'Thanks for submitting your request. We are working on your loan agreement and will notify you when we have uploaded it for your signature!'}
                        {status === 3 &&
                            'Thanks for signing the contract. The contract currently is in review by our team.'}
                    </p>
                </div>
            )}

            {status === 2 && (
                <div className='card-with-stepper__box min-h-180'>
                    <div className='card-with-stepper__download-wrap p-30 w-50'>
                        <div className='card-with-stepper__status'>
                            <div className='card-with-stepper__icon-wrap card-with-stepper__icon-wrap--red'>
                                <DocumentIcon />
                            </div>
                            <span className='card-with-stepper__status-name'>Requires contract signature</span>
                        </div>
                        <DefaultButton className='download-btn'>
                            <DocWhiteIcon />
                            <a className='download-link' href={offer} download target='_blank'>
                                Download contracts
                            </a>
                        </DefaultButton>
                    </div>
                    <div className='card-with-stepper__upload-wrap w-50'>
                        <label for='fileCreate'>
                            <div className='upload-file'>
                                <SignedDocIcon />
                                <div className='upload-file__inner'>
                                    <p className='upload-file__title'>Upload signed document</p>
                                    <p className='upload-file__desc'>and we will immediately continue the process</p>
                                </div>
                            </div>
                            <input
                                type='file'
                                id='fileCreate'
                                style={{display: 'none'}}
                                onChange={(e) => {
                                    let fileItem = e.target.files[0];
                                    let formData = new FormData();
                                    setLoading(true);
                                    formData.append('signature_offer', fileItem);
                                    downloadFile(id, formData).then((res) => {
                                        if (res.payload && res.payload.status && res.payload.status === 200) {
                                            getData();
                                            setLoading(false);
                                        } else {
                                        }
                                    });
                                }}
                            />
                        </label>
                    </div>
                </div>
            )}

            {status >= 4 && (
                <div className='py-40 pl-30 pr-85'>
                    <ol className='stepper-wrap'>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 4 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <Box2Icon />
                            </div>
                            <span className='stepper-wrap__name'>
                                {investment ? 'Investment Received' : 'Supplies Received'}
                            </span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 5 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <GearsIcon />
                            </div>
                            <span className='stepper-wrap__name'>Production Process</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 6 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <BoxIcon />
                            </div>
                            <span className='stepper-wrap__name'>Shipping Process</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 7 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <CustomsIcon />
                            </div>
                            <span className='stepper-wrap__name'>Customs Clearance</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status === 8
                                        ? ' stepper-wrap__icon-wrap--with-badge'
                                        : status >= 9
                                        ? ' stepper-wrap__icon-wrap--active'
                                        : ''
                                }`}
                            >
                                {status === 8 && fulfillment_center && (
                                    <span className='stepper-wrap__badge'>{fulfillment_center}</span>
                                )}
                                <DocumentIcon />
                            </div>
                            <span className='stepper-wrap__name '>Fulfillment Center</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status === 9
                                        ? ' stepper-wrap__icon-wrap--with-badge'
                                        : status >= 10
                                        ? ' stepper-wrap__icon-wrap--active'
                                        : ''
                                }`}
                            >
                                {status === 9 && already_delivered && (
                                    <span className='stepper-wrap__badge'>{already_delivered}</span>
                                )}
                                <DeliveryIcon />
                            </div>
                            <span className='stepper-wrap__name'>Already delivered</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 10 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <InvoiceIcon />
                            </div>
                            <span className='stepper-wrap__name'>Payment Received</span>
                        </li>
                        <li className='stepper-wrap__step'>
                            <div
                                className={`stepper-wrap__icon-wrap${
                                    status >= 11 ? ' stepper-wrap__icon-wrap--active' : ''
                                }`}
                            >
                                <SuccessIcon />
                            </div>
                            <span className='stepper-wrap__name'>Success</span>
                        </li>
                    </ol>
                </div>
            )}
        </div>
    );
};

export default CardWithStepper;
