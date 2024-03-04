import PropTypes from 'prop-types';

const NewsarticalCard = ({ news }) => {
    const { title, description, image } = news;

    const truncatedtitle = title.length > 25 ? `${title.substring(0, 25)}...` : title;

    const truncatedDescription = description.length > 90 ? `${description.substring(0, 90)}...` : description;

    const openModal = () => {
        const modal = document.getElementById('my_modal_5');
        const modalImg = modal.querySelector('.modal-img');

        modal.showModal();
        modalImg.src = image;
    };

    const closeModal = () => {
        const modal = document.getElementById('my_modal_5');
        modal.close();
    };

    return (
        <div className="card card-compact bg-base-100 shadow-xl flex-grow">
            <figure>
                <img
                    className="w-full h-full"
                    src={image}
                    alt="News"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-lg font-bold">{truncatedtitle}</h2>
                <p className='text-xs'>{truncatedDescription}</p>
                <div className="card-actions justify-end">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn-outline btn-xs btn" onClick={openModal}>Show More </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{truncatedtitle}</h3>
                            <img className="modal-img" src="" alt={truncatedtitle} />
                            <p className="py-4">{description}</p>
                            <div className="modal-action">
                                <button className="btn-outline btn-xs btn" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

NewsarticalCard.propTypes = {
    news: PropTypes.object.isRequired
};

export default NewsarticalCard;
