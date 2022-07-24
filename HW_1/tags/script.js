const links = document.getElementsByTagName("a");
const nLinks = links.length;
document.getElementById('number_of_links').textContent = nLinks.toString();

const contentLinkFirst = links.item(0).innerHTML;
document.getElementById('content_link_first').textContent = contentLinkFirst;

const pictures = document.getElementsByTagName("img");
const nPictures = pictures.length;
document.getElementById('number_of_pictures').textContent = nPictures.toString();

const firstPictureWidth = pictures[0].scrollWidth;
document.getElementById('width_picture_first').textContent = firstPictureWidth.toString() + 'px';

function getMaxWidth(pictures) {
    let maxCurWidth = 0;
    for (let pic of pictures) {
        let width = pic.getBoundingClientRect().width;
        maxCurWidth = (width > maxCurWidth) ? width : maxCurWidth;
    }
    return maxCurWidth;
}

const MaxWidthOfPictures = getMaxWidth(pictures);
document.getElementById('width_picture_widest').textContent = MaxWidthOfPictures.toString()+ 'px';

function getSumOfHeightsOfPictures(pictures) {
    let sumCur = 0;
    for (let picture of pictures) {
        sumCur += picture.getBoundingClientRect().height;
    }
    return sumCur;
}

const sumOfHeightsOfPictures = getSumOfHeightsOfPictures(pictures);
document.getElementById('sum_heights_pictures').textContent = sumOfHeightsOfPictures.toString() + 'px';