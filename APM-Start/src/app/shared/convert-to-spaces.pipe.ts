import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'convertToSpaces'
})
   

export class ConvertToSpacesPipe implements PipeTransform {

    transform(inputString: string, characterToMakeASpace: string ): string {
        return inputString.replace(characterToMakeASpace, ' ')
    }
}