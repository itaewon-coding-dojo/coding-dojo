package main

import (
	"sort"
	"strconv"
	"strings"
)

func maxMin(str string) (result string, err error) {
	numberStrings := strings.Split(str, " ")

	var numbers []int64
	for _, v := range numberStrings {
		parseResult, err := strconv.ParseInt(v, 10, 64)
		if err != nil {
			return "", err
		}
		numbers = append(numbers, parseResult)
	}

	sort.Slice(numbers, func(i, j int) bool {
		return numbers[i] < numbers[j]
	})

	result = strconv.FormatInt(numbers[0], 10) +
		" " +
		strconv.FormatInt(numbers[len(numbers)-1], 10)
	return
}
