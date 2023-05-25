export const Card = ({ title, imageUrl, orderId, latestMessageTimestamp }) => {
    let objectDate = new Date(latestMessageTimestamp);
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();
  
    return `
    <article class="card" data-id=${orderId}>
      <div class="card-image">
        <img
          class="image"
          src=${imageUrl}
          alt=${title}
        />
      </div>
      
      <div class="card-data-wrapper">
        <h6 class="card-title">${title}</h6>
        <h6 class="card-subTitle">${orderId}</h6>
        <p class="card-description">
          Random
        </p>
      </div>  
      <time class="card-footer">${day}/${month}/${year}</time>
    </article>`;
  };
  