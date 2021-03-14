import {Pipe, PipeTransform} from '@angular/core';

/**
 * 文件大小转换
 */
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  private static TB_UNIT = 'TB';
  private static GB_UNIT = 'GB';
  private static MB_UNIT = 'MB';
  private static KB_UNIT = 'KB';
  private static B_UNIT = 'B';

  // TB
  private static fileSizeTb(fileSize: number) {
    return fileSize / (1024 * 1024 * 1024 * 1024);
  }

  // GB
  private static fileSizeGb(fileSize: number) {
    return fileSize / (1024 * 1024 * 1024);
  }

  // MB
  private static fileSizeMb(fileSize: number) {
    return fileSize / (1024 * 1024);
  }

  // KB
  private static fileSizeKb(fileSize: number) {
    return fileSize / 1024;
  }

  /**
   * {{ value | fileSize }}
   * {{ value | fileSize:fractionDigits }}
   * {{ value | fileSize:fractionDigits:extension }}
   */
  transform(value: number, fractionDigits?: number, extension?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'): string {
    if (value == null) {
      return null;
    }
    const realFractionDigits = fractionDigits == null ? 2 : fractionDigits;
    if (extension == null) {
      // TB
      if (value >= (1024 * 1024 * 1024 * 1024)) {
        return FileSizePipe.fileSizeTb(value).toFixed(realFractionDigits) + FileSizePipe.TB_UNIT;
      } else if (value >= (1024 * 1024 * 1024)) {
        return FileSizePipe.fileSizeGb(value).toFixed(realFractionDigits) + FileSizePipe.GB_UNIT;
      } else if (value >= (1024 * 1024)) {
        return FileSizePipe.fileSizeMb(value).toFixed(realFractionDigits) + FileSizePipe.MB_UNIT;
      } else if (value >= 1024) {
        return FileSizePipe.fileSizeKb(value).toFixed(realFractionDigits) + FileSizePipe.KB_UNIT;
      } else {
        return value.toFixed(realFractionDigits) + FileSizePipe.B_UNIT;
      }
    } else {
      switch (extension) {
        case "TB":
          return FileSizePipe.fileSizeTb(value).toFixed(realFractionDigits) + FileSizePipe.TB_UNIT;
        case "GB":
          return FileSizePipe.fileSizeGb(value).toFixed(realFractionDigits) + FileSizePipe.GB_UNIT;
        case "MB":
          return FileSizePipe.fileSizeMb(value).toFixed(realFractionDigits) + FileSizePipe.MB_UNIT;
        case "KB":
          return FileSizePipe.fileSizeKb(value).toFixed(realFractionDigits) + FileSizePipe.KB_UNIT;
        case "B":
          return value.toFixed(realFractionDigits) + FileSizePipe.B_UNIT;
      }
    }
    return null;
  }

}
