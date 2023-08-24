1. GOOD VS EVIL
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

2. DATA REVERSE
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

3. Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"