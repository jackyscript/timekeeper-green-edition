import type { Ref } from "vue";

type supportedTimeValue = string | Date;

export function setupTime(
  timeElement: Ref<HTMLInputElement | undefined>,
  timeData: supportedTimeValue
) {
    function isSupportedTimeValue(
      timeValue: supportedTimeValue
    ): timeValue is supportedTimeValue {
      return typeof timeValue === "string" || timeValue instanceof Date;
    }

    function setTime(
      timeRef: Ref<HTMLInputElement | undefined>,
      timeValue: string | Date
    ): void {
      if (typeof timeRef !== "undefined") {
        setupTimeElement(timeRef, timeValue);
      } else {
        console.error(
          "During time initialization an error occured: The given HTMLInputTimeElement is undefined"
        );
      }
    }

    function setTimeValue(
      timeElement: HTMLInputElement,
      timeValue: supportedTimeValue
    ): void {
      if (typeof timeValue === "string") {
        timeElement.value = timeValue;
      } else if (timeValue instanceof Date) {
        timeElement.valueAsDate = timeValue;
      } else {
        console.error(
          "During time initialization an error occured: timeValue has illegal type " +
            typeof timeValue
        );
      }
    }

    function setupTimeElement(
      timeRef: Ref<HTMLInputElement | undefined>,
      timeValue: supportedTimeValue
    ) {
      const timeElement = timeRef.value;
      if (timeElement && isSupportedTimeValue(timeValue)) {
        setTimeValue(timeElement, timeValue);
      }
    }

    setTime(timeElement, timeData);

}
