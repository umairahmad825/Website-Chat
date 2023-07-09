import React from "react";

export const Comments = ({ className }) => {
  return (
    <svg
      className={`comments ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        fill="black"
        height="20"
        id="path-1-outside-1_2_156"
        maskUnits="userSpaceOnUse"
        width="21"
        x="5.33398"
        y="5.6665"
      >
        <rect className="rect" fill="white" height="20" width="21" x="5.33398" y="5.6665" />
        <path
          className="path"
          d="M23.9389 20.7868C24.769 19.4642 25.2381 17.9359 25.3214 16.3824C25.4057 14.807 25.0638 13.2274 24.3651 11.8129C23.6906 10.4472 22.6598 9.27947 21.4216 8.38917C20.1539 7.47732 18.6633 6.93267 17.1153 6.73625C16.7465 6.68958 16.3746 6.66702 16.0028 6.6665C13.7989 6.67112 11.6742 7.4527 9.98496 8.85073C8.37332 10.1847 7.2339 12.0991 6.84496 14.1454C6.64376 15.206 6.67169 16.2681 6.67169 17.3399V21.593C6.67169 22.5582 6.66186 23.5239 6.67169 24.4885C6.67169 24.5039 6.67169 24.5193 6.67169 24.5347C6.67169 24.8783 6.96547 25.1701 7.31252 25.1701H14.719C15.2093 25.1701 15.7002 25.1783 16.1905 25.1681C17.7649 25.1347 19.3248 24.7065 20.6866 23.9213C22.0071 23.1603 23.1315 22.0715 23.9384 20.7863L23.9389 20.7868ZM19.7794 22.969C19.6238 23.0515 19.466 23.1295 19.3057 23.2028C19.2628 23.2223 19.2198 23.2418 19.1764 23.2603C19.1702 23.2628 19.1572 23.2685 19.1428 23.2746C19.1195 23.2839 19.0812 23.2998 19.0678 23.3054C19.0181 23.3249 18.9685 23.3444 18.9188 23.3628C18.5842 23.489 18.2413 23.5946 17.8932 23.6782C17.7111 23.7223 17.5275 23.7603 17.3434 23.7921C17.2596 23.8064 17.1753 23.8193 17.091 23.8321C17.0387 23.8388 16.986 23.8449 16.9337 23.85C16.3348 23.9131 15.7317 23.8988 15.1307 23.8988H7.9549V17.8748C7.9549 17.0045 7.91352 16.1199 7.98024 15.2511C7.98955 15.1295 8.00144 15.008 8.01592 14.887C8.01799 14.8716 8.01955 14.8557 8.02162 14.8403C8.02162 14.8403 8.02162 14.8403 8.02162 14.8398C8.03248 14.768 8.04334 14.6967 8.05575 14.6249C8.09868 14.3772 8.15196 14.131 8.21661 13.8879C8.28023 13.6474 8.3547 13.41 8.43952 13.1761C8.47935 13.0653 8.52177 12.9556 8.56677 12.8469C8.56366 12.854 8.56055 12.8607 8.55641 12.8689C8.56624 12.8479 8.57503 12.8258 8.58434 12.8043C8.61279 12.7397 8.64176 12.6761 8.67124 12.6125C8.87865 12.1694 9.12432 11.7442 9.40465 11.3427C9.47034 11.2483 9.53809 11.155 9.60791 11.0637C9.60326 11.0693 9.60015 11.0729 9.59446 11.0796C9.61308 11.0575 9.63067 11.0339 9.64877 11.0114C9.6886 10.9616 9.72895 10.9124 9.76981 10.8632C9.92963 10.6724 10.0982 10.4883 10.2741 10.3113C10.4458 10.139 10.6253 9.97336 10.811 9.81591C10.8963 9.7436 10.9832 9.67385 11.0711 9.60462C11.0634 9.60975 11.0577 9.61436 11.0484 9.62103C11.0613 9.6118 11.0737 9.60205 11.0861 9.59282C11.0892 9.59026 11.0918 9.58821 11.0949 9.58564C11.1032 9.57898 11.1135 9.5718 11.1218 9.56616C11.1254 9.56359 11.1285 9.56103 11.1321 9.55846C11.188 9.51692 11.2449 9.47589 11.3018 9.43589C11.7031 9.15331 12.1288 8.90458 12.5726 8.6938C12.6745 8.64508 12.7779 8.59943 12.8819 8.5543C12.9005 8.54661 12.9196 8.53892 12.9383 8.53174C13.0045 8.50558 13.0707 8.47994 13.1374 8.45532C13.3722 8.36865 13.6101 8.29224 13.8517 8.22608C14.0958 8.15941 14.3425 8.103 14.5913 8.05735C14.7108 8.0353 14.8323 8.02248 14.9518 7.9994C14.7376 8.04043 14.9445 8.00094 14.9999 7.99427C15.0733 7.98607 15.1468 7.97837 15.2202 7.97222C15.4804 7.94914 15.7416 7.93837 16.0028 7.93786C16.3726 7.93888 16.7408 7.9635 17.108 8.00761C17.1142 8.00863 17.1205 8.00914 17.1267 8.01017C17.1691 8.01632 17.211 8.02299 17.2529 8.02966C17.3485 8.04504 17.4442 8.06248 17.5394 8.08146C17.7168 8.11633 17.8927 8.15684 18.0675 8.203C18.4187 8.29531 18.7636 8.40968 19.1004 8.54558C19.1086 8.54917 19.1174 8.55225 19.1262 8.55584C19.1536 8.56764 19.181 8.57943 19.2085 8.59123C19.2948 8.62918 19.3802 8.66867 19.465 8.70918C19.6238 8.7856 19.78 8.86663 19.9336 8.95227C20.2444 9.12562 20.5444 9.31794 20.8315 9.5282C20.862 9.55077 20.8925 9.57334 20.9225 9.5959C20.9277 9.6 20.9328 9.60411 20.938 9.6077C21.0068 9.66155 21.074 9.71642 21.1413 9.77232C21.2794 9.88771 21.4139 10.0072 21.5447 10.1308C21.7976 10.3698 22.0361 10.6237 22.2585 10.8914C22.2879 10.9273 22.3174 10.9632 22.3464 10.9991C22.3516 11.0057 22.3655 11.0232 22.3785 11.0396C22.3929 11.058 22.41 11.0806 22.4172 11.0898C22.4452 11.1268 22.4726 11.1642 22.5 11.2016C22.606 11.3473 22.7074 11.496 22.8041 11.6478C22.9919 11.9432 23.162 12.2499 23.312 12.5653C23.3498 12.6448 23.3865 12.7243 23.4217 12.8048C23.4227 12.8069 23.4238 12.8089 23.4243 12.8115C23.4424 12.8566 23.461 12.9007 23.4791 12.9458C23.5443 13.1105 23.6042 13.2771 23.6586 13.4453C23.7692 13.7854 23.8577 14.1326 23.9244 14.4839C23.9415 14.5726 23.9565 14.6618 23.971 14.7511C23.9777 14.7931 23.9829 14.8352 23.9896 14.8767C23.9544 14.6639 23.987 14.8588 23.9927 14.9065C24.0144 15.0885 24.0299 15.2716 24.0397 15.4547C24.0599 15.8311 24.0558 16.2091 24.0268 16.585C24.0201 16.6701 24.0123 16.7553 24.003 16.8404C23.9984 16.883 23.9937 16.925 23.9885 16.9676C23.9875 16.9773 23.986 16.9871 23.9849 16.9973C23.957 17.1758 23.927 17.3538 23.8898 17.5307C23.8148 17.8856 23.7165 18.2354 23.597 18.5774C23.5696 18.6554 23.5412 18.7328 23.5117 18.8098C23.4967 18.8482 23.4817 18.8867 23.4667 18.9246C23.4589 18.9436 23.4212 19.0339 23.417 19.0446C23.4134 19.0534 23.4098 19.0611 23.4082 19.0646C23.3891 19.1077 23.37 19.1503 23.3503 19.1929C23.3136 19.2723 23.2753 19.3513 23.236 19.4298C23.0767 19.7472 22.8977 20.055 22.7002 20.3504C22.6034 20.495 22.5021 20.637 22.3971 20.7755C22.3935 20.7806 22.3893 20.7858 22.3852 20.7909C22.3614 20.8206 22.3381 20.8499 22.3143 20.8796C22.2595 20.9468 22.2036 21.0135 22.1467 21.0796C21.9155 21.3468 21.6673 21.6002 21.4051 21.8371C21.2758 21.954 21.1433 22.0669 21.0073 22.1756C20.9794 22.1982 20.9509 22.2202 20.9225 22.2428C20.9158 22.2479 20.9091 22.253 20.9028 22.2576C20.8284 22.3135 20.7528 22.3679 20.6763 22.4212C20.3892 22.6218 20.0898 22.8049 19.78 22.9695L19.7794 22.969Z"
        />
      </mask>
      <path
        className="path"
        d="M23.9389 20.7868C24.769 19.4642 25.2381 17.9359 25.3214 16.3824C25.4057 14.807 25.0638 13.2274 24.3651 11.8129C23.6906 10.4472 22.6598 9.27947 21.4216 8.38917C20.1539 7.47732 18.6633 6.93267 17.1153 6.73625C16.7465 6.68958 16.3746 6.66702 16.0028 6.6665C13.7989 6.67112 11.6742 7.4527 9.98496 8.85073C8.37332 10.1847 7.2339 12.0991 6.84496 14.1454C6.64376 15.206 6.67169 16.2681 6.67169 17.3399V21.593C6.67169 22.5582 6.66186 23.5239 6.67169 24.4885C6.67169 24.5039 6.67169 24.5193 6.67169 24.5347C6.67169 24.8783 6.96547 25.1701 7.31252 25.1701H14.719C15.2093 25.1701 15.7002 25.1783 16.1905 25.1681C17.7649 25.1347 19.3248 24.7065 20.6866 23.9213C22.0071 23.1603 23.1315 22.0715 23.9384 20.7863L23.9389 20.7868ZM19.7794 22.969C19.6238 23.0515 19.466 23.1295 19.3057 23.2028C19.2628 23.2223 19.2198 23.2418 19.1764 23.2603C19.1702 23.2628 19.1572 23.2685 19.1428 23.2746C19.1195 23.2839 19.0812 23.2998 19.0678 23.3054C19.0181 23.3249 18.9685 23.3444 18.9188 23.3628C18.5842 23.489 18.2413 23.5946 17.8932 23.6782C17.7111 23.7223 17.5275 23.7603 17.3434 23.7921C17.2596 23.8064 17.1753 23.8193 17.091 23.8321C17.0387 23.8388 16.986 23.8449 16.9337 23.85C16.3348 23.9131 15.7317 23.8988 15.1307 23.8988H7.9549V17.8748C7.9549 17.0045 7.91352 16.1199 7.98024 15.2511C7.98955 15.1295 8.00144 15.008 8.01592 14.887C8.01799 14.8716 8.01955 14.8557 8.02162 14.8403C8.02162 14.8403 8.02162 14.8403 8.02162 14.8398C8.03248 14.768 8.04334 14.6967 8.05575 14.6249C8.09868 14.3772 8.15196 14.131 8.21661 13.8879C8.28023 13.6474 8.3547 13.41 8.43952 13.1761C8.47935 13.0653 8.52177 12.9556 8.56677 12.8469C8.56366 12.854 8.56055 12.8607 8.55641 12.8689C8.56624 12.8479 8.57503 12.8258 8.58434 12.8043C8.61279 12.7397 8.64176 12.6761 8.67124 12.6125C8.87865 12.1694 9.12432 11.7442 9.40465 11.3427C9.47034 11.2483 9.53809 11.155 9.60791 11.0637C9.60326 11.0693 9.60015 11.0729 9.59446 11.0796C9.61308 11.0575 9.63067 11.0339 9.64877 11.0114C9.6886 10.9616 9.72895 10.9124 9.76981 10.8632C9.92963 10.6724 10.0982 10.4883 10.2741 10.3113C10.4458 10.139 10.6253 9.97336 10.811 9.81591C10.8963 9.7436 10.9832 9.67385 11.0711 9.60462C11.0634 9.60975 11.0577 9.61436 11.0484 9.62103C11.0613 9.6118 11.0737 9.60205 11.0861 9.59282C11.0892 9.59026 11.0918 9.58821 11.0949 9.58564C11.1032 9.57898 11.1135 9.5718 11.1218 9.56616C11.1254 9.56359 11.1285 9.56103 11.1321 9.55846C11.188 9.51692 11.2449 9.47589 11.3018 9.43589C11.7031 9.15331 12.1288 8.90458 12.5726 8.6938C12.6745 8.64508 12.7779 8.59943 12.8819 8.5543C12.9005 8.54661 12.9196 8.53892 12.9383 8.53174C13.0045 8.50558 13.0707 8.47994 13.1374 8.45532C13.3722 8.36865 13.6101 8.29224 13.8517 8.22608C14.0958 8.15941 14.3425 8.103 14.5913 8.05735C14.7108 8.0353 14.8323 8.02248 14.9518 7.9994C14.7376 8.04043 14.9445 8.00094 14.9999 7.99427C15.0733 7.98607 15.1468 7.97837 15.2202 7.97222C15.4804 7.94914 15.7416 7.93837 16.0028 7.93786C16.3726 7.93888 16.7408 7.9635 17.108 8.00761C17.1142 8.00863 17.1205 8.00914 17.1267 8.01017C17.1691 8.01632 17.211 8.02299 17.2529 8.02966C17.3485 8.04504 17.4442 8.06248 17.5394 8.08146C17.7168 8.11633 17.8927 8.15684 18.0675 8.203C18.4187 8.29531 18.7636 8.40968 19.1004 8.54558C19.1086 8.54917 19.1174 8.55225 19.1262 8.55584C19.1536 8.56764 19.181 8.57943 19.2085 8.59123C19.2948 8.62918 19.3802 8.66867 19.465 8.70918C19.6238 8.7856 19.78 8.86663 19.9336 8.95227C20.2444 9.12562 20.5444 9.31794 20.8315 9.5282C20.862 9.55077 20.8925 9.57334 20.9225 9.5959C20.9277 9.6 20.9328 9.60411 20.938 9.6077C21.0068 9.66155 21.074 9.71642 21.1413 9.77232C21.2794 9.88771 21.4139 10.0072 21.5447 10.1308C21.7976 10.3698 22.0361 10.6237 22.2585 10.8914C22.2879 10.9273 22.3174 10.9632 22.3464 10.9991C22.3516 11.0057 22.3655 11.0232 22.3785 11.0396C22.3929 11.058 22.41 11.0806 22.4172 11.0898C22.4452 11.1268 22.4726 11.1642 22.5 11.2016C22.606 11.3473 22.7074 11.496 22.8041 11.6478C22.9919 11.9432 23.162 12.2499 23.312 12.5653C23.3498 12.6448 23.3865 12.7243 23.4217 12.8048C23.4227 12.8069 23.4238 12.8089 23.4243 12.8115C23.4424 12.8566 23.461 12.9007 23.4791 12.9458C23.5443 13.1105 23.6042 13.2771 23.6586 13.4453C23.7692 13.7854 23.8577 14.1326 23.9244 14.4839C23.9415 14.5726 23.9565 14.6618 23.971 14.7511C23.9777 14.7931 23.9829 14.8352 23.9896 14.8767C23.9544 14.6639 23.987 14.8588 23.9927 14.9065C24.0144 15.0885 24.0299 15.2716 24.0397 15.4547C24.0599 15.8311 24.0558 16.2091 24.0268 16.585C24.0201 16.6701 24.0123 16.7553 24.003 16.8404C23.9984 16.883 23.9937 16.925 23.9885 16.9676C23.9875 16.9773 23.986 16.9871 23.9849 16.9973C23.957 17.1758 23.927 17.3538 23.8898 17.5307C23.8148 17.8856 23.7165 18.2354 23.597 18.5774C23.5696 18.6554 23.5412 18.7328 23.5117 18.8098C23.4967 18.8482 23.4817 18.8867 23.4667 18.9246C23.4589 18.9436 23.4212 19.0339 23.417 19.0446C23.4134 19.0534 23.4098 19.0611 23.4082 19.0646C23.3891 19.1077 23.37 19.1503 23.3503 19.1929C23.3136 19.2723 23.2753 19.3513 23.236 19.4298C23.0767 19.7472 22.8977 20.055 22.7002 20.3504C22.6034 20.495 22.5021 20.637 22.3971 20.7755C22.3935 20.7806 22.3893 20.7858 22.3852 20.7909C22.3614 20.8206 22.3381 20.8499 22.3143 20.8796C22.2595 20.9468 22.2036 21.0135 22.1467 21.0796C21.9155 21.3468 21.6673 21.6002 21.4051 21.8371C21.2758 21.954 21.1433 22.0669 21.0073 22.1756C20.9794 22.1982 20.9509 22.2202 20.9225 22.2428C20.9158 22.2479 20.9091 22.253 20.9028 22.2576C20.8284 22.3135 20.7528 22.3679 20.6763 22.4212C20.3892 22.6218 20.0898 22.8049 19.78 22.9695L19.7794 22.969Z"
        fill="#AFB9CA"
      />
      <path
        className="path"
        d="M23.9389 20.7868C24.769 19.4642 25.2381 17.9359 25.3214 16.3824C25.4057 14.807 25.0638 13.2274 24.3651 11.8129C23.6906 10.4472 22.6598 9.27947 21.4216 8.38917C20.1539 7.47732 18.6633 6.93267 17.1153 6.73625C16.7465 6.68958 16.3746 6.66702 16.0028 6.6665C13.7989 6.67112 11.6742 7.4527 9.98496 8.85073C8.37332 10.1847 7.2339 12.0991 6.84496 14.1454C6.64376 15.206 6.67169 16.2681 6.67169 17.3399V21.593C6.67169 22.5582 6.66186 23.5239 6.67169 24.4885C6.67169 24.5039 6.67169 24.5193 6.67169 24.5347C6.67169 24.8783 6.96547 25.1701 7.31252 25.1701H14.719C15.2093 25.1701 15.7002 25.1783 16.1905 25.1681C17.7649 25.1347 19.3248 24.7065 20.6866 23.9213C22.0071 23.1603 23.1315 22.0715 23.9384 20.7863L23.9389 20.7868ZM19.7794 22.969C19.6238 23.0515 19.466 23.1295 19.3057 23.2028C19.2628 23.2223 19.2198 23.2418 19.1764 23.2603C19.1702 23.2628 19.1572 23.2685 19.1428 23.2746C19.1195 23.2839 19.0812 23.2998 19.0678 23.3054C19.0181 23.3249 18.9685 23.3444 18.9188 23.3628C18.5842 23.489 18.2413 23.5946 17.8932 23.6782C17.7111 23.7223 17.5275 23.7603 17.3434 23.7921C17.2596 23.8064 17.1753 23.8193 17.091 23.8321C17.0387 23.8388 16.986 23.8449 16.9337 23.85C16.3348 23.9131 15.7317 23.8988 15.1307 23.8988H7.9549V17.8748C7.9549 17.0045 7.91352 16.1199 7.98024 15.2511C7.98955 15.1295 8.00144 15.008 8.01592 14.887C8.01799 14.8716 8.01955 14.8557 8.02162 14.8403C8.02162 14.8403 8.02162 14.8403 8.02162 14.8398C8.03248 14.768 8.04334 14.6967 8.05575 14.6249C8.09868 14.3772 8.15196 14.131 8.21661 13.8879C8.28023 13.6474 8.3547 13.41 8.43952 13.1761C8.47935 13.0653 8.52177 12.9556 8.56677 12.8469C8.56366 12.854 8.56055 12.8607 8.55641 12.8689C8.56624 12.8479 8.57503 12.8258 8.58434 12.8043C8.61279 12.7397 8.64176 12.6761 8.67124 12.6125C8.87865 12.1694 9.12432 11.7442 9.40465 11.3427C9.47034 11.2483 9.53809 11.155 9.60791 11.0637C9.60326 11.0693 9.60015 11.0729 9.59446 11.0796C9.61308 11.0575 9.63067 11.0339 9.64877 11.0114C9.6886 10.9616 9.72895 10.9124 9.76981 10.8632C9.92963 10.6724 10.0982 10.4883 10.2741 10.3113C10.4458 10.139 10.6253 9.97336 10.811 9.81591C10.8963 9.7436 10.9832 9.67385 11.0711 9.60462C11.0634 9.60975 11.0577 9.61436 11.0484 9.62103C11.0613 9.6118 11.0737 9.60205 11.0861 9.59282C11.0892 9.59026 11.0918 9.58821 11.0949 9.58564C11.1032 9.57898 11.1135 9.5718 11.1218 9.56616C11.1254 9.56359 11.1285 9.56103 11.1321 9.55846C11.188 9.51692 11.2449 9.47589 11.3018 9.43589C11.7031 9.15331 12.1288 8.90458 12.5726 8.6938C12.6745 8.64508 12.7779 8.59943 12.8819 8.5543C12.9005 8.54661 12.9196 8.53892 12.9383 8.53174C13.0045 8.50558 13.0707 8.47994 13.1374 8.45532C13.3722 8.36865 13.6101 8.29224 13.8517 8.22608C14.0958 8.15941 14.3425 8.103 14.5913 8.05735C14.7108 8.0353 14.8323 8.02248 14.9518 7.9994C14.7376 8.04043 14.9445 8.00094 14.9999 7.99427C15.0733 7.98607 15.1468 7.97837 15.2202 7.97222C15.4804 7.94914 15.7416 7.93837 16.0028 7.93786C16.3726 7.93888 16.7408 7.9635 17.108 8.00761C17.1142 8.00863 17.1205 8.00914 17.1267 8.01017C17.1691 8.01632 17.211 8.02299 17.2529 8.02966C17.3485 8.04504 17.4442 8.06248 17.5394 8.08146C17.7168 8.11633 17.8927 8.15684 18.0675 8.203C18.4187 8.29531 18.7636 8.40968 19.1004 8.54558C19.1086 8.54917 19.1174 8.55225 19.1262 8.55584C19.1536 8.56764 19.181 8.57943 19.2085 8.59123C19.2948 8.62918 19.3802 8.66867 19.465 8.70918C19.6238 8.7856 19.78 8.86663 19.9336 8.95227C20.2444 9.12562 20.5444 9.31794 20.8315 9.5282C20.862 9.55077 20.8925 9.57334 20.9225 9.5959C20.9277 9.6 20.9328 9.60411 20.938 9.6077C21.0068 9.66155 21.074 9.71642 21.1413 9.77232C21.2794 9.88771 21.4139 10.0072 21.5447 10.1308C21.7976 10.3698 22.0361 10.6237 22.2585 10.8914C22.2879 10.9273 22.3174 10.9632 22.3464 10.9991C22.3516 11.0057 22.3655 11.0232 22.3785 11.0396C22.3929 11.058 22.41 11.0806 22.4172 11.0898C22.4452 11.1268 22.4726 11.1642 22.5 11.2016C22.606 11.3473 22.7074 11.496 22.8041 11.6478C22.9919 11.9432 23.162 12.2499 23.312 12.5653C23.3498 12.6448 23.3865 12.7243 23.4217 12.8048C23.4227 12.8069 23.4238 12.8089 23.4243 12.8115C23.4424 12.8566 23.461 12.9007 23.4791 12.9458C23.5443 13.1105 23.6042 13.2771 23.6586 13.4453C23.7692 13.7854 23.8577 14.1326 23.9244 14.4839C23.9415 14.5726 23.9565 14.6618 23.971 14.7511C23.9777 14.7931 23.9829 14.8352 23.9896 14.8767C23.9544 14.6639 23.987 14.8588 23.9927 14.9065C24.0144 15.0885 24.0299 15.2716 24.0397 15.4547C24.0599 15.8311 24.0558 16.2091 24.0268 16.585C24.0201 16.6701 24.0123 16.7553 24.003 16.8404C23.9984 16.883 23.9937 16.925 23.9885 16.9676C23.9875 16.9773 23.986 16.9871 23.9849 16.9973C23.957 17.1758 23.927 17.3538 23.8898 17.5307C23.8148 17.8856 23.7165 18.2354 23.597 18.5774C23.5696 18.6554 23.5412 18.7328 23.5117 18.8098C23.4967 18.8482 23.4817 18.8867 23.4667 18.9246C23.4589 18.9436 23.4212 19.0339 23.417 19.0446C23.4134 19.0534 23.4098 19.0611 23.4082 19.0646C23.3891 19.1077 23.37 19.1503 23.3503 19.1929C23.3136 19.2723 23.2753 19.3513 23.236 19.4298C23.0767 19.7472 22.8977 20.055 22.7002 20.3504C22.6034 20.495 22.5021 20.637 22.3971 20.7755C22.3935 20.7806 22.3893 20.7858 22.3852 20.7909C22.3614 20.8206 22.3381 20.8499 22.3143 20.8796C22.2595 20.9468 22.2036 21.0135 22.1467 21.0796C21.9155 21.3468 21.6673 21.6002 21.4051 21.8371C21.2758 21.954 21.1433 22.0669 21.0073 22.1756C20.9794 22.1982 20.9509 22.2202 20.9225 22.2428C20.9158 22.2479 20.9091 22.253 20.9028 22.2576C20.8284 22.3135 20.7528 22.3679 20.6763 22.4212C20.3892 22.6218 20.0898 22.8049 19.78 22.9695L19.7794 22.969Z"
        mask="url(#path-1-outside-1_2_156)"
        stroke="#AFB9CA"
        strokeLinejoin="round"
        strokeWidth="0.958849"
      />
      <path
        className="path"
        d="M14.9747 16.1581C14.8398 15.5911 15.1939 15.0229 15.7658 14.8891C16.3377 14.7552 16.9107 15.1064 17.0456 15.6735C17.1806 16.2405 16.8264 16.8087 16.2546 16.9425C15.6827 17.0764 15.1097 16.7252 14.9747 16.1581Z"
        fill="#AFB9CA"
      />
      <path
        className="path"
        d="M19.741 16.8926C19.1982 16.6696 18.9404 16.0525 19.1652 15.5143C19.3901 14.976 20.0124 14.7204 20.5553 14.9433C21.0981 15.1663 21.3559 15.7834 21.1311 16.3217C20.9062 16.8599 20.2839 17.1156 19.741 16.8926Z"
        fill="#AFB9CA"
      />
      <path
        className="path"
        d="M11.8443 16.9731C11.2567 16.9731 10.7804 16.5008 10.7804 15.9182C10.7804 15.3356 11.2567 14.8633 11.8443 14.8633C12.4319 14.8633 12.9082 15.3356 12.9082 15.9182C12.9082 16.5008 12.4319 16.9731 11.8443 16.9731Z"
        fill="#AFB9CA"
      />
    </svg>
  );
};
