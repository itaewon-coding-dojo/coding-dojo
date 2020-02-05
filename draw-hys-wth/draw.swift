import Foundation
import XCTest

func meetRound(_ participantsCount: Int, _ a: Int, _ b:Int) -> Int {
    var participants = [String]()
    
    for index in 0 ..< participantsCount {
        if index + 1 == a || index + 1 == b {
            participants.append("A")
        } else {
            participants.append("Z")
        }
    }
    
    return findRound(participants, 1)
}

func findRound(_ participants: [String], _ round: Int) -> Int {
    var nextParticipants = [String]()
    
    for i in stride(from: 0, to: participants.count, by: 2) {
       if isMatch(participants[i], participants[i+1]) {
           return round
       }
        
        if participants[i] == "A" {
            nextParticipants.append(participants[i])
       } else if participants[i + 1] == "A" {
            nextParticipants.append(participants[i+1])
       } else {
            nextParticipants.append(participants[i])
        }
        if i > participants.count {
                break
        }
   }
    
    return findRound(nextParticipants, round + 1)
}

func isMatch(_ a: String, _ b: String) -> Bool {
    return a == "A" && b == "A"
}

class GetCenterTests: XCTestCase {
    func testExample() {
        XCTAssertEqual(meetRound(8, 4, 7), 3)
    }
    
    func testIsMatch() {
        XCTAssertEqual(isMatch("A", "A"), true)
    }
    
    func testIsMatchWhenReversed() {
        XCTAssertEqual(isMatch("Z", "A"), true)
    }
}

GetCenterTests.defaultTestSuite.run()
