PATTERNS FOR CREDIT CARD DETECTION

/[^\d]/g: This pattern is used with replace to remove all characters that are not digits from the card number. Here:

[^...]: The ^ inside the square brackets negates the character set, so [^\d] means any character that is not a digit.
\d: This represents any digit from 0 to 9.
/g: This flag stands for "global" and ensures that all instances of the pattern are replaced, not just the first one.

/^\d{13,16}$/: This pattern checks if the card number contains only digits and has a length between 13 and 16 digits inclusively. Breaking it down:

^: Asserts the start of the string.
\d{13,16}: Matches between 13 to 16 digits.
$: Asserts the end of the string.



REGULAR EXPRESSIONS FOR CARD TYPES

^4: Matches if the card number starts with a '4', indicating a Visa card.
^5[1-5]: Matches if the card number starts with a '5' followed by a digit between 1 and 5, indicating a Mastercard.
^3[47]: Matches if the card number starts with '34' or '37', indicating an American Express card.
^6(?:011|5): Matches if the card number starts with '6011' or '65', indicating a Discover card.
