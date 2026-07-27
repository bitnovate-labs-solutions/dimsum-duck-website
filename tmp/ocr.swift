import Foundation
import Vision
import AppKit

let args = CommandLine.arguments
guard args.count > 1 else {
    fputs("Usage: ocr <image-path>\n", stderr)
    exit(1)
}
let url = URL(fileURLWithPath: args[1])
guard let image = NSImage(contentsOf: url),
      let tiff = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiff),
      let cgImage = rep.cgImage else {
    fputs("Failed to load image\n", stderr)
    exit(1)
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
request.recognitionLanguages = ["zh-Hans", "zh-Hant", "en-US"]

let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try handler.perform([request])
let observations = request.results ?? []
for obs in observations {
    if let candidate = obs.topCandidates(1).first {
        print(candidate.string)
    }
}
