package main

import (
	"log"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("CodingDojoGo", func() {
	Describe("MaxMin", func() {
		It("returns max min strings", func() {
			result, err := maxMin("1 2 3 4")
			if err != nil {
				log.Panicln(err)
			}

			Expect(result).To(Equal("1 4"))
		})
	})
})
