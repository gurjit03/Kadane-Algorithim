# Kadane-Algorithim
This is javascript Solution to one of the famous Dynamic Programming Algo Kadane's Algorithim.
<h4>
Problem Statement
</h4>
Given an array A={a1,a2,…,aN} of N elements, find the maximum possible sum of a
</h4>

<h4>
Contiguous subarray
Non-contiguous (not necessarily contiguous) subarray. <br>
Empty subarrays/subsequences should not be considered. <br>
</h4>

This Youtube video by Ben Wright might be useful to understand the Kadane algorithm for the maximum subarray in a 1-D sequence.

<h4>
Input Format
</h4>

First line of the input has an integer T. T cases follow. 
Each test case begins with an integer N. In the next line, N integers follow representing the elements of array A.

<h4>
Constraints:
</h4>

1≤T≤10 <br>
1≤N≤105 <br>
−104≤ai≤104 <br>

The subarray and subsequences you consider should have at least one element.

<h4>
Output Format
</h4>

Two, space separated, integers denoting the maximum contiguous and non-contiguous subarray. At least one integer should be selected and put into the subarrays (this may be required in cases where all elements are negative).

<h4>
Sample Input
</h4>

2 <br> 
4 <br>
1 2 3 4 <br>
6 <br>
2 -1 2 3 4 -5 <br>

<h4>
Sample Output
</h4>

10 10 <br>
10 11 <br>

<h4>
Explanation
</h4>

In the first case: 
The max sum for both contiguous and non-contiguous elements is the sum of ALL the elements (as they are all positive).

In the second case: 
[2 -1 2 3 4] --> This forms the contiguous sub-array with the maximum sum. 
For the max sum of a not-necessarily-contiguous group of elements, simply add all the positive elements.


