import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () =>
{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navbox">Description</div>
                <div className="descriptionbox-navbox fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Welcome to our online bookstore, where literary dreams come to life and the world of
                 knowledge is just a click away! Immerse yourself in the enchanting realm of literature 
                 as you explore our vast collection of books spanning various genres and interests.
                 Our user-friendly interface ensures a seamless browsing experience. Effortlessly explore different genres, authors, and 
                 subjects, making it convenient for you to find your next literary adventure. Whether you're a fan of fiction, non-fiction
                 , romance, mystery, or science fiction, our bookstore is your gateway to a world of captivating narratives.
                </p>
                <p>
                The variety of books available on this platform is astounding. From classic literature to contemporary bestsellers,
                 the collection spans across genres, ensuring
                 there's something for every reader. The meticulous curation makes it easy to discover new gems and rediscover old favorites.
                 The extensive collection, user-friendly interface, exclusive deals, and community engagement make it a standout in the world of online
                  bookstores. My experience was nothing short of exceptional,
                  and I highly recommend this platform to fellow bibliophiles. Happy reading! 
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox;