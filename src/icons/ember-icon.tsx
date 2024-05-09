import { useState } from "react";

const EmberIcon = () => {
    const [color, setColor] = useState('#94aab9');
    
    return(
        <div className="flex justify-center items-center">
            <svg width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor('#E24B31')}}
        onMouseLeave={() => {setColor('#94aab9')}}>
                <path d="M77.6567 22.1499C77.468 20.2964 76.1218 19.4698 74.8585 19.4698C74.28 19.4698 73.8195 19.6351 73.6425 19.706L73.3945 19.8123L73.182 19.9658C72.8867 20.19 72.3673 20.497 71.9068 20.6623C71.8833 20.2845 71.895 19.8003 71.9539 19.399L71.9658 19.3282C72.3082 16.0693 71.6234 14.1685 69.935 13.6843C69.6516 13.6017 69.3565 13.5663 69.0612 13.5663C68.0341 13.5663 67.125 14.0621 66.5346 14.4872C66.0387 13.8615 65.2123 13.5073 64.1733 13.5073C62.6265 13.5073 61.3868 14.2276 60.9382 15.3846C60.8909 15.5027 60.8318 15.6797 60.761 15.9159C59.8519 13.9086 57.9982 13.1412 56.2744 13.1412C54.645 13.1412 53.0628 13.7789 52.4724 14.2275C52.4489 14.251 52.4135 14.2629 52.3781 14.2983C50.8313 15.3964 49.627 16.7778 48.7769 18.4425C48.3637 17.0021 47.4546 15.6561 45.8252 14.6407L45.8016 14.6171C45.7543 14.5936 45.7189 14.57 45.6717 14.5463C47.2657 11.7125 48.6825 7.958 47.8324 4.3805C46.935 0.566844 44.6916 0 43.4283 0C42.9089 0 42.3776 0.0945247 41.8345 0.283422L41.7991 0.295276L41.7635 0.306977C39.3903 1.23976 38.3513 2.64487 38.1269 2.97555C37.8909 3.32964 35.2933 7.27323 34.6676 13.0468C34.5968 13.6843 34.5258 14.3456 34.455 15.0068C34.0891 14.4872 33.487 14.015 32.5305 13.7198C32.2353 13.6254 31.9284 13.59 31.6214 13.59C30.3108 13.59 29.2481 14.3928 28.6814 14.9241L28.6695 14.9123C28.1737 14.1802 27.3827 13.7435 26.5089 13.7081H26.2964C24.9031 13.7081 23.7933 14.322 22.9786 15.0186C22.4592 14.1094 21.5027 13.5427 20.3812 13.5427C20.2866 13.5427 20.204 13.5427 20.1213 13.5546H19.9324C18.3857 13.5546 17.1696 14.2866 16.6737 15.5027C16.6383 15.5972 16.5911 15.7151 16.5438 15.8686C15.3277 14.3574 13.781 13.6489 11.703 13.6489H11.5024C10.2035 13.6725 6.96839 14.2158 4.98474 18.6788C4.67776 19.3636 4.4416 20.0602 4.26456 20.745C3.90914 20.5812 3.52237 20.4965 3.13102 20.497C2.09201 20.497 1.31286 21.0874 0.935069 21.6423C0.628092 22.091 -0.352107 23.6848 0.132066 25.2434C0.391933 26.0817 0.994033 26.7193 1.84415 27.0499C2.58804 27.3451 3.53252 27.6284 4.241 27.8292C4.67776 28.8209 5.45706 29.9661 6.83845 31.017C7.8185 31.7609 9.06997 32.1387 10.5459 32.1387C13.0254 32.1387 15.4221 31.0643 15.682 30.9462L15.7764 30.8991L15.7999 30.8754C16.2722 31.3712 16.898 31.7255 17.689 31.879C17.9252 31.9261 18.2322 31.9616 18.5864 31.9616C19.9324 31.9616 20.8652 31.2767 21.7272 29.9898C22.4355 31.0997 23.7225 31.7253 25.2455 31.7253H25.2574C25.3401 31.7253 25.4227 31.7846 25.5173 31.7846C26.32 31.7846 27.3236 31.5012 28.162 30.1552C28.8584 31.4067 30.1336 32.1268 31.6451 32.1268C32.9909 32.1268 34.1599 31.572 34.3723 31.4658L34.4196 31.4421C34.8682 31.2059 35.2462 30.9935 35.5413 30.8281C36.5449 31.3594 38.0679 31.9498 39.9335 31.9498C40.2523 31.9498 40.571 31.9379 40.8898 31.9027L40.9725 31.8908L41.0552 31.879C45.0105 31.0997 47.5844 30.1552 49.1192 29.4349C50.1937 30.6392 51.9057 31.7963 54.3499 31.9733C54.6214 31.9971 54.9047 32.0088 55.1763 32.0088C57.1835 32.0088 58.7892 31.4421 59.97 30.8163C60.3478 31.2178 60.8201 31.5837 61.434 31.8317C61.8 31.9852 62.1778 32.056 62.5674 32.056C65.0232 32.056 66.1686 29.1279 66.4875 28.1361L67.0777 26.5541C67.5973 27.1088 68.2585 27.5576 69.0968 27.7937C69.5572 27.9237 70.0531 27.9943 70.5608 27.9943C73.2647 27.9943 75.8621 26.0817 76.2753 25.763C77.0192 25.149 77.8339 23.8856 77.6567 22.1499Z" fill="white"/>
                <path d="M52.8868 22.95C52.8868 22.95 52.5445 21.7458 53.8196 19.4198C55.0829 17.1056 56.0748 18.3689 56.0748 18.3689C56.0748 18.3689 57.161 19.5497 55.9214 21.3089C54.6816 23.08 52.8868 22.95 52.8868 22.95ZM43.1461 24.6267C41.6939 28.4285 38.1636 26.8819 38.1636 26.8819C38.1636 26.8819 37.7621 25.5241 38.9074 21.7104C40.0528 17.9085 42.7446 19.3962 42.7446 19.3962C42.7446 19.3962 44.5983 20.8248 43.1461 24.6267ZM40.5132 8.69885C40.5132 8.69885 42.7092 2.97251 43.2406 5.75901C43.7719 8.54536 38.636 16.8339 38.636 16.8339C38.6831 14.9685 40.5132 8.69885 40.5132 8.69885ZM9.10657 22.9499C9.20094 19.2662 11.6095 17.6605 12.4479 18.4633C13.2862 19.2662 12.9792 21.0018 11.397 22.0881C9.82675 23.1743 9.10657 22.9499 9.10657 22.9499ZM75.6507 22.3478C75.5326 21.108 74.4111 21.5685 74.4111 21.5685C74.4111 21.5685 72.6164 22.9617 71.0344 22.8083C69.4639 22.6429 69.9599 19.1245 69.9599 19.1245C69.9599 19.1245 70.3022 15.8894 69.3694 15.6178C68.4368 15.3463 67.2914 16.4561 67.2914 16.4561C67.2914 16.4561 65.8629 18.0381 65.1896 20.0455L65.0009 20.1044C65.0009 20.1044 65.2133 16.5742 64.9655 15.7713C64.7766 15.3698 63.0764 15.4052 62.8048 16.1137C62.5214 16.822 61.1635 21.7692 61.0692 23.8474C61.0692 23.8474 58.4126 26.1025 56.0865 26.4803C53.7607 26.8462 53.2057 25.394 53.2057 25.394C53.2057 25.394 59.5224 23.6348 59.2981 18.5931C59.0855 13.5515 54.2093 15.4169 53.6543 15.8303C53.123 16.2318 50.2775 17.9437 49.4393 22.702C49.4156 22.8674 49.3566 23.5758 49.3566 23.5758C49.3566 23.5758 46.9125 25.217 45.5548 25.6537C45.5548 25.6537 49.3566 19.2543 44.7164 16.338C42.6148 15.0747 40.9383 17.7313 40.9383 17.7313C40.9383 17.7313 47.2195 10.7415 45.8264 4.82608C45.1651 2.01617 43.76 1.70919 42.4613 2.16966C40.5014 2.94896 39.7575 4.08234 39.7575 4.08234C39.7575 4.08234 37.219 7.76607 36.6286 13.2445C36.0383 18.723 35.1764 25.3349 35.1764 25.3349C35.1764 25.3349 33.972 26.5157 32.8622 26.5747C31.7524 26.6338 32.2482 23.2687 32.2482 23.2687C32.2482 23.2687 33.1102 18.1326 33.0511 17.2708C32.9921 16.4088 32.933 15.9365 31.9059 15.6295C30.8904 15.3226 29.7687 16.6214 29.7687 16.6214C29.7687 16.6214 26.8289 21.0726 26.5809 21.7574L26.4274 22.0408L26.2739 21.8519C26.2739 21.8519 28.3519 15.783 26.3684 15.7005C24.3848 15.606 23.086 17.8611 23.086 17.8611C23.086 17.8611 20.8308 21.6393 20.7364 22.0645L20.583 21.8755C20.583 21.8755 21.5157 17.4833 21.3268 16.397C21.1379 15.3109 20.1225 15.5352 20.1225 15.5352C20.1225 15.5352 18.8238 15.3817 18.4812 16.2199C18.1388 17.0582 16.8992 22.5958 16.7457 24.3548C16.7457 24.3548 13.4988 26.681 11.3616 26.7046C9.22465 26.74 9.44895 25.3467 9.44895 25.3467C9.44895 25.3467 17.2769 22.6666 15.1399 17.377C14.1835 16.0192 13.0619 15.5941 11.4916 15.6178C9.90957 15.6533 8.0557 16.6096 6.78053 19.4551C6.17843 20.8129 5.93042 22.0998 5.93042 23.0798C5.93042 23.0798 4.46635 23.3632 3.72261 22.7374C2.97873 22.1235 2.55367 22.7374 2.55367 22.7374C2.55367 22.7374 1.25494 24.5912 2.51826 25.0869C3.78158 25.5829 5.74152 26.0434 5.74152 26.0434C5.91872 26.8462 6.45 28.1568 7.99674 29.3257C10.3109 31.0849 14.7739 29.0542 14.7739 29.0542L16.604 27.9679C16.604 27.9679 16.6631 29.6092 17.9972 29.857C19.3315 30.105 19.8863 29.8335 22.2005 24.2134C23.5584 21.3323 23.6527 21.4858 23.6527 21.4858L23.8062 21.4504C23.8062 21.4504 22.7555 26.9524 23.1569 28.4402C23.5584 29.928 25.3175 29.7745 25.3175 29.7745C25.3175 29.7745 26.2739 30.1167 27.0532 27.3894C27.8325 24.662 29.3084 21.8165 29.3084 21.8165H29.4973C29.4973 21.8165 28.8478 27.295 29.8397 29.0896C30.8314 30.8843 33.3935 29.6209 33.3935 29.6209C33.3935 29.6209 35.1882 28.6764 35.4715 28.393C35.4715 28.393 37.5968 30.1877 40.6076 29.857C47.3258 28.5346 49.7108 26.74 49.7108 26.74C49.7108 26.74 50.8679 29.6563 54.4336 29.9278C58.5188 30.2348 60.7503 27.6609 60.7503 27.6609C60.7503 27.6609 60.7149 29.3257 62.1436 29.9161C63.5721 30.5064 64.5286 27.3894 64.5286 27.3894L66.9136 21.0018H67.1262C67.1262 21.0018 67.2443 25.087 69.6055 25.7718C71.9788 26.4449 75.0369 24.0834 75.0369 24.0834C75.0369 24.0834 75.7807 23.5875 75.6509 22.3478" fill={color}/>
            </svg>
        </div>
    );
}

export default EmberIcon;