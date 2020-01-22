package main

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestCodingDojoGo(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "CodingDojoGo Suite")
}
