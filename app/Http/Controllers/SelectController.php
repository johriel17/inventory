<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;

class SelectController extends Controller
{
    //
    public function select(Request $request){

        $type = $request->input('type');

        if($type == 'all-categories'){
            
            $categories = Category::all();

            return response()->json($categories, 200);
        }

        if($type == 'all-brands'){
        
            $brands = Brand::all();

            return response()->json($brands, 200);

        }

        return response()->json($type, 200);
    }
}
